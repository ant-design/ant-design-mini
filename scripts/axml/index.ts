import * as types from '@ali/oxyde-compiler-generator';
import * as fs from 'fs/promises';
import * as path from 'path';
import { basicComponetMapping, isBasicComponet } from './basicComponet';
import { getFilesWithExtension } from './utils';

async function main({ inputDir }) {
  const inputFilesPath = await getFilesWithExtension(inputDir, '.axml');

  const transCodes = inputFilesPath.map(async (filePath) => {
    const axmlCode = await fs.readFile(filePath, 'utf-8');
    const transCode = transform(axmlCode, {
      mapping: {
        '*': {
          'a:elif': 'wx:elif',
          'a:else': 'wx:else',
          'a:for': 'wx:for',
          'a:for-index': 'wx:for-index',
          'a:for-item': 'wx:for-item',
          'a:if': 'wx:if',
          'a:key': 'wx:key',
          role: 'aria-role',
        },
        'import-sjs': {
          '*': 'wxs',
          from: 'src',
          name: 'module',
        },
        ...basicComponetMapping,
      },
      conditionComment: {
        // include: string | RegExp | Function => 仅处理匹配文件
        // exclude: string | RegExp | Function => 不处理匹配文件
        removeStart(v) {
          // 注释内容为入参，返回 true 时表示开始剪枝
          return /#if\s+(?!WECHAT)/.test(v);
        },
        removeEnd(v) {
          // 注释内容为入参，返回 true 时表示停止剪枝
          return /#endif/.test(v);
        },
      },
    });
    return { filePath, transCode };
  });

  const ouputPath = path.resolve(__dirname, `./output`);
  if ((await fs.stat(ouputPath)).isDirectory()) {
    await fs.rm(ouputPath, { recursive: true });
  }
  await fs.mkdir(ouputPath);
  transCodes.forEach(async (i) => {
    const item = await i;
    const ouputFilePath = path.resolve(
      ouputPath,
      path.relative(inputDir, item.filePath)
    );
    await fs.mkdir(path.dirname(ouputFilePath), { recursive: true });
    fs.writeFile(ouputFilePath, item.transCode);
  });
}

main({ inputDir: path.resolve(__dirname, `./fixtures`) });

interface IRegExp {
  test(str: string): boolean;
}
type IFunction = (filename: string) => boolean;

function transform(axmlCode, options) {
  const { mapping, conditionComment } = options || {};
  function conditionMatches(
    condition: string | IRegExp | IFunction,
    input: string
  ) {
    switch (typeof condition) {
      case 'string':
        return input.includes(condition);
      case 'function':
        return condition(input);
      case 'object':
        return condition.test && condition.test(input);
    }
    return false;
  }
  function commentMatches(
    path: types.ElementPath | types.TextPath,
    condition: string | IRegExp | IFunction
  ) {
    const { leadingComments } = path.node;
    if (leadingComments) {
      const index = leadingComments.findIndex((actual) =>
        conditionMatches(condition, actual)
      );
      path.node.leadingComments = []; // 注释全部删掉
      if (index >= 0) {
        // const clone = leadingComments.slice();
        // clone.splice(index, 1);
        // path.node.leadingComments = clone;
        return true;
      }
    }
  }

  const RemoveElementText = (current: types.ElementPath | types.TextPath) => {
    if (commentMatches(current, conditionComment.removeStart)) {
      while (current) {
        const sibling = current.nextSibling;
        current.remove();
        if (sibling && commentMatches(sibling, conditionComment.removeEnd)) {
          break;
        }
        current = sibling;
      }
    }
  };

  // 将模板内容解析成 AST
  const {
    /**
     * AST 节点。
     * 使用 types.traverse() 遍历转换，
     * 或者 types.stringify() 输出
     */
    ast,
    /**
     * 编译过程中发生的告警。
     * 建议修复
     */
    warnings,
  } = types.parse(axmlCode);

  if (warnings.length > 0) console.warn(JSON.stringify(warnings));

  const __TRIM_VISITED__ = Symbol('trimVisited');
  types.traverse(ast, {
    Interpolation(interpolation, state) {
      // start ----- 对文本进行 trim 处理 -----
      if (interpolation.parent && interpolation.parent.isText()) {
        let node = interpolation.node;
        if (!node[__TRIM_VISITED__]) {
          const before = node.interpolation;
          const after = before.trim();
          if (after !== before) {
            node = types.interpolation(after);
            node[__TRIM_VISITED__] = true;
            interpolation.replaceWith(node);
          }
        }
      }
      // end ----- 对文本进行 trim 处理 -----
    },
    Attribute: {
      enter(attribute) {
        // start ----- ElementDataset 处理 -----
        if (attribute.node.is === 'dataset') {
          function dash(str: string) {
            return str.replace(/[A-Z]/g, (v) => '-' + v.toLowerCase());
          }
          attribute.node.name =
            'data-' + dash(attribute.node.name.substring(5));
        }
        // end ----- ElementDataset 处理 -----
      },
      exit(attribute) {
        const { node } = attribute;
        const raw = node.name;
        // 通用属性转换，比如指令
        // 对自定义组件和基础组件都生效
        if (mapping['*'][raw]) {
          node.name = mapping['*'][raw];
        }
        // 基础组件的事件名转换
        // 纯模板文件或者非自定义组件标签
        if (node.is === 'event') {
          // 冒泡事件
          if (raw.startsWith('on')) {
            node.name = 'bind:' + raw.substring(2).toLowerCase();
          }
          // 非冒泡事件
          else if (raw.startsWith('catch')) {
            node.name = 'catch:' + raw.substring(5).toLowerCase();
          }
        }
        if (raw === 'ref') {
          node.name = 'bind:ref';
        }

        // 不能编译 slot-scope
        if (attribute.node.name === 'slot-scope') {
          console.warn('Cannot transform `slot-scope`');
        }
      },
    },
    Element: {
      enter(element) {
        // start ----- 对 条件编译 进行处理 -----
        RemoveElementText(element);
        // end ----- 对 条件编译 进行处理 -----

        // start ----- 对 key属性 进行处理 -----
        // 进入元素的时候处理，其他时机可能让 a:for 被转到 wx:for
        let attribute: void | types.AttributePath;
        let aFor = false;
        let aForItem = 'item';
        let aForIndex = 'index';
        let current = element.firstChild;
        while (current && current.isAttribute()) {
          const { name } = current.node;
          if (name === 'a:for') {
            aFor = true;
          } else if (name === 'a:for-item') {
            aForItem = current.node.value.interpolation;
          } else if (name === 'a:for-index') {
            aForIndex = current.node.value.interpolation;
          } else if (name === 'key') {
            attribute = current;
          }
          current = current.nextSibling;
        }
        if (!aFor || !attribute) {
          return;
        }
        let itemProperty: string | void;
        let isItemReferenced: void | true;
        let isIndexReferenced: void | true;
        let isUnknownBindingReferenced: void | true;
        attribute.node.value.transform({
          Identifier(identifier) {
            if (identifier.isReferenced()) {
              switch (identifier.node.name) {
                case aForItem: {
                  let propertyName: string | void;
                  const { parentPath } = identifier;
                  const isOrInStringExp = (babelPath: typeof parentPath) =>
                    babelPath.isBinaryExpression({ operator: '+' }) ||
                    babelPath.isExpressionStatement() ||
                    babelPath.isTemplateLiteral();
                  // 如果 key 是一个表达式，先看表达式中的依赖的变量
                  // 比如 "foo-{{item}}" "{{item}}" "{{`foo-${item}`}}"
                  // 都可以得知真实的依赖是 item
                  if (isOrInStringExp(parentPath)) {
                    propertyName = '*this';
                  }
                  // 如果取 item 的属性
                  // 比如 "{{item.foo}}" "item['bar']" "item[0]"
                  // 那么也是可以转的
                  else if (
                    parentPath.isMemberExpression() &&
                    isOrInStringExp(parentPath.parentPath)
                  ) {
                    const property = parentPath.get('property');
                    if (parentPath.node.computed) {
                      if (
                        property.isStringLiteral() ||
                        property.isNumericLiteral()
                      ) {
                        propertyName = property.node.value + '';
                      }
                    } else if (property.isIdentifier()) {
                      propertyName = property.node.name;
                    }
                  }
                  if (
                    propertyName &&
                    (!itemProperty || itemProperty === propertyName)
                  ) {
                    itemProperty = propertyName;
                  } else {
                    // "{{item.foo}}{{item.bar}}"
                    // 这种多个依赖也是不能转成 a:key 的
                    isUnknownBindingReferenced = true;
                  }
                  isItemReferenced = true;
                  break;
                }
                case aForIndex: {
                  isIndexReferenced = true;
                  break;
                }
                default: {
                  isUnknownBindingReferenced = true;
                }
              }
            }
          },
        });
        let warning: string | void;
        if (
          isIndexReferenced &&
          !isUnknownBindingReferenced &&
          !isItemReferenced
        ) {
          // 依赖 "{{index}}" 做索引等于没做
          warning =
            'Bad usage of `key` with `a:for`: value of `a:for-index` should not be indexed';
        } else if (
          isItemReferenced &&
          !isIndexReferenced &&
          !isUnknownBindingReferenced
        ) {
          if (itemProperty) {
            attribute.replaceWith(
              types.attribute('a:key', types.interpolation(itemProperty))
            );
          } else {
            // 分析 "{{item}}" 失败，比如 "{{item.foo.bar}}"
            warning = 'Failed to parse `key` expression';
          }
        } else {
          // 依赖了别的变量，比如 "{{sjs.invoke(item)}}" "{{foo + item}}"
          warning =
            'Cannot transform `key` to `a:key` due to unknown referenced identifier';
        }
        if (warning) {
          console.warn(warning + ': ' + attribute.node.value.interpolation);
        }
        // end ----- 对 key属性 进行处理 -----
      },

      exit(element) {
        const { tagName } = element.node;
        if (mapping[tagName]) {
          // 基础组件标签名转换
          if (mapping[tagName]['*']) {
            element.node.tagName = mapping[tagName]['*'];
          }
          // 不能走 traverse
          // 因为会走到子路径
          for (const attribute of element.node.attributes) {
            const raw = attribute.name;

            // 按指定转换表直转换
            if (mapping[tagName] && mapping[tagName][raw]) {
              attribute.name = mapping[tagName][raw];
            }
          }
        }

        // compiler 默认转换组件 className 就会换成 class，针对非基础组件需要不处理
        if (!isBasicComponet(tagName)) {
          for (const attribute of element.node.attributes) {
            const raw = attribute.name;
            if (raw === 'class') {
              attribute.name = 'className';
              break;
            }
          }
        }
        // sjs的引入的文件后缀需要调整
        if (tagName === 'import-sjs') {
          for (const attribute of element.node.attributes) {
            const raw = attribute.name;
            if (raw === 'from' || raw === 'src') {
              attribute.value = types.interpolation(
                (attribute.value.interpolation || '').replace('.sjs', '.wxs')
              );
              break;
            }
          }
        }

        // start ----- 对 template 进行处理 -----
        if (element.node.tagName === 'template') {
          let absent = true;
          let attribute = element.firstChild;
          while (attribute && attribute.isAttribute()) {
            if (attribute.node.name === 'data') {
              absent = false;
              const interpolation = attribute.firstChild;
              const { node } = interpolation;
              let value = node.expression as string;
              if (node.is === types.InterpolationIs.Object) {
                value = value.slice(2, -2);
              }
              interpolation.replaceWith(
                types.interpolation('{{' + value + ',$id}}')
              );
              break;
            }
            attribute = attribute.nextSibling;
          }
          if (absent) {
            element.appendChild(
              types.attribute('data', types.interpolation('{{ $id }}'))
            );
          }
        }
        // end ----- 对 template 进行处理 -----
      },
    },
    Text: {
      enter(text) {
        // start ----- 对 条件编译 进行处理 -----
        RemoveElementText(text);
        // end ----- 对 条件编译 进行处理 -----
      },
    },
  });

  // 然后将内容字符串化
  const transCode = types.stringify(ast); // '<view hidden="{{true}}">foo</view>'

  return transCode;
}

import * as types from '@ali/oxyde-compiler-generator';

export default function ({ mapping }) {
  return {
    Element: {
      enter(element, state) {
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
      },
    },
    Attribute: {
      exit(attribute) {
        const { node } = attribute;
        const raw = node.name;
        // 通用属性转换，比如指令
        // 对自定义组件和基础组件都生效
        if (mapping['*'] && mapping['*'][raw]) {
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
      },
    },
  };
}

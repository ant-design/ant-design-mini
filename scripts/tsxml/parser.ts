import * as types from '@babel/types';
import { ITransformContext, TransformContext } from './context';
import { getAxmlArrowFunctionExpression, parseXmlScript } from './utils';

export function getJSXElementName(
  ctx: ITransformContext<types.JSXElement>
): string {
  const nameNode = ctx.node.openingElement.name;
  switch (nameNode.type) {
    case 'JSXIdentifier': {
      return nameNode.name;
    }
    default: {
      throw ctx.throw(nameNode, 'Unsupported JSXElement name');
    }
  }
}

export function getJSXAttributeName(
  ctx: ITransformContext<types.JSXAttribute>
): string {
  const nameNode = ctx.node.name;
  switch (nameNode.type) {
    case 'JSXIdentifier': {
      return nameNode.name;
    }
    default: {
      throw ctx.throw(nameNode, 'Unsupported JSXElement name');
    }
  }
}

export async function tsxmlToAxml(ctx: ITransformContext<types.File>) {
  const xmlScript = await parseXmlScript(ctx);
  const imports = await Promise.all(
    xmlScript.map((o) =>
      TransformContext.toHtml(
        ctx.h(ctx.platform.xmlScript.tagName, {
          [ctx.platform.xmlScript.from]: o.path,
          [ctx.platform.xmlScript.name]: o.moduleName,
        })
      )
    )
  );
  const arrowFunctionCtx = getAxmlArrowFunctionExpression(ctx);
  if (arrowFunctionCtx === null) {
    throw ctx.throw(ctx.node, 'tsxml 必须使用 export default 导出');
  }
  const axml = await TransformContext.toHtml(
    transformJSXElement(arrowFunctionCtx)
  );
  return imports.concat([axml]).join('\n');
}

interface NodeAttr {
  name: string;
  value: string;
}

export function transformJSXElement(ctx: ITransformContext) {
  switch (ctx.node.type) {
    case 'ArrowFunctionExpression': {
      return transformJSXElement(ctx.extends(ctx.node.body));
    }
    case 'JSXEmptyExpression': {
      return null;
    }
    case 'JSXElement': {
      const tagName = ctx.getTagName(
        getJSXElementName(ctx as ITransformContext<types.JSXElement>)
      );

      if (tagName === 'page' || tagName === 'component') {
        return [
          ...ctx.node.children.map((node) => {
            return transformJSXElement(ctx.extends(node));
          }),
        ];
      }
      const props = ctx.node.openingElement.attributes
        .map((attr) => {
          if (attr.type === 'JSXSpreadAttribute') {
            throw ctx.throw(ctx.node);
          }
          const attrName = ctx.getAttrName(
            tagName,
            getJSXAttributeName(ctx.extends(attr))
          );
          if (attr.value === null) {
            return {
              name: attrName,
              value: true,
            };
          }
          switch (attr.value.type) {
            case 'StringLiteral': {
              return { name: attrName, value: attr.value.value };
            }
            case 'JSXExpressionContainer': {
              return {
                name: attrName,
                value: transformAttrExpression(
                  ctx.extends(attr.value.expression)
                ),
              };
            }
            default: {
              throw ctx.throw(ctx.node);
            }
          }
        })
        .filter((o): o is NodeAttr => !!o)
        .reduce((acc, cur) => {
          acc[cur.name] = cur.value;
          return acc;
        }, ctx.extraAttr);

      return ctx.h(
        tagName,
        { ...props },
        ...ctx.node.children.map((node) => {
          return transformJSXElement(ctx.extends(node));
        })
      );
    }
    case 'JSXText': {
      return ctx.node.value;
    }
    case 'JSXExpressionContainer': {
      return transformJSXElement(ctx.extends(ctx.node.expression));
    }
    case 'LogicalExpression': {
      if (ctx.node.operator === '&&') {
        return transformJSXElement(
          ctx.extends(ctx.node.right, {
            [ctx.if()]: ctx.extends(ctx.node.left).toAxmlExpression(true),
          })
        );
      }
      return ctx.extends(ctx.node).toAxmlExpression(true);
    }
    case 'CallExpression': {
      if (ctx.node.callee.type !== 'MemberExpression') {
        throw ctx.throw(ctx.node);
      }

      const callee = ctx.node.callee;

      if (
        !types.isIdentifier(callee.property) ||
        callee.property.name !== 'map'
      ) {
        return ctx.toAxmlExpression(ctx.node);
      }
      if (ctx.node.arguments.length !== 1) {
        throw ctx.throw(ctx.node);
      }
      const mapFunction = ctx.node.arguments[0];
      if (mapFunction.type !== 'ArrowFunctionExpression') {
        throw ctx.throw(mapFunction);
      }
      const mapFunctionItem = mapFunction.params[0];
      const mapFunctionItemIndex = mapFunction.params[1];
      let itemName = 'item';
      if (mapFunctionItem) {
        if (mapFunctionItem.type !== 'Identifier') {
          throw ctx.throw(mapFunctionItem);
        } else {
          itemName = mapFunctionItem.name;
        }
      }
      let indexName = 'index';
      if (mapFunctionItemIndex) {
        if (mapFunctionItemIndex.type !== 'Identifier') {
          throw ctx.throw(mapFunctionItemIndex);
        } else {
          indexName = mapFunctionItemIndex.name;
        }
      }

      let forItem = ctx.extends(callee.object).toAxmlExpression();

      if (
        types.isCallExpression(callee.object) &&
        types.isIdentifier(callee.object.callee, { name: '$toArray' })
      ) {
        forItem = ctx.extends(callee.object.arguments[0]).toAxmlExpression();
      }
      const forProps = {
        [ctx.for()]: forItem,
        [ctx.forIndex()]: indexName,
        [ctx.forItem()]: itemName,
      };

      const { forKey, arrowFunction } = findForKey(ctx.node.arguments[0], ctx);
      if (forKey) {
        forProps[ctx.forKey()] = forKey;
      }
      return ctx.h(
        'block',
        forProps,
        transformJSXElement(ctx.extends(arrowFunction))
      );
    }
    case 'ObjectExpression': {
      return ctx.toAxmlExpression();
    }
    case 'MemberExpression': {
      return ctx.toAxmlExpression();
    }
    case 'BinaryExpression': {
      return ctx.toAxmlExpression();
    }
    case 'Identifier': {
      return ctx.toAxmlExpression();
    }
    case 'ConditionalExpression': {
      const isElse = ctx.extraAttr?.[ctx.else()];
      return [
        transformJSXElement(
          ctx.extends(ctx.node.consequent, {
            [isElse ? ctx.elseif() : ctx.if()]: ctx
              .extends(ctx.node.test)
              .toAxmlExpression(),
          })
        ),
        transformJSXElement(
          ctx.extends(ctx.node.alternate, {
            [ctx.else()]: true,
          })
        ),
      ];
    }

    default: {
      throw ctx.throw(
        ctx.node,
        'Unsupported JSXElement (' + ctx.node.type + ')'
      );
    }
  }
}

function findForKey(_arrowFunction: types.Node, ctx) {
  const arrowFunction = types.cloneNode(_arrowFunction, true);
  if (arrowFunction.type !== 'ArrowFunctionExpression') {
    return { arrowFunction };
  }
  const body = arrowFunction.body;
  if (body.type !== 'JSXElement') {
    return { arrowFunction };
  }
  const attrIndex = body.openingElement.attributes.findIndex((e) => {
    return e.type === 'JSXAttribute' && e.name.name === 'key';
  });
  if (attrIndex !== -1) {
    const attr = body.openingElement.attributes[attrIndex];
    if (attr.type === 'JSXAttribute') {
      body.openingElement.attributes.splice(attrIndex, 1);
      return {
        arrowFunction,
        forKey: transformJSXElement(ctx.extends(attr.value)),
      };
    }
  }
  return { arrowFunction };
}

function transformAttrExpression(ctx: ITransformContext) {
  const expression = ctx.node;
  switch (expression.type) {
    case 'Identifier': {
      return `{{ ${expression.name} }}`;
    }
    case 'TemplateLiteral': {
      const quasis = expression.quasis;
      const expressions = expression.expressions;
      const res: string[] = [];
      for (let i = 0; i < quasis.length; i++) {
        res.push(quasis[i].value.raw);
        if (expressions[i]) {
          res.push(ctx.extends(expressions[i]).toAxmlExpression(true));
        }
      }
      return res.join('');
    }
    case 'UnaryExpression':
    case 'ConditionalExpression':
    case 'LogicalExpression':
    case 'BooleanLiteral':
    case 'MemberExpression':
    case 'NumericLiteral':
    case 'BinaryExpression':
    case 'CallExpression': {
      return ctx.toAxmlExpression();
    }

    case 'ArrayExpression': {
      const result = ctx.toAxmlExpression();
      if (result.startsWith('{{ ;')) {
        return result.replace(/^\{\{ ;/, '{{ ');
      }
      break;
    }

    case 'ObjectExpression': {
      return ctx.toAxmlObject();
    }
    default: {
      throw ctx.throw(ctx.node, '解析 Attribute 失败 + ' + expression.type);
    }
  }
}

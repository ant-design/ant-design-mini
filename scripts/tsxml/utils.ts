import * as types from '@babel/types';
import { parse } from '@babel/parser';
import { ITransformContext } from './context';

export function getAxmlArrowFunctionExpression(
  ctx: ITransformContext<types.File>
): ITransformContext<types.ArrowFunctionExpression> | null {
  const file = ctx.node;
  const exportDefaultDeclaration =
    (file.program.body.find(
      (o) => o.type === 'ExportDefaultDeclaration'
    ) as types.ExportDefaultDeclaration) ?? null;
  if (!exportDefaultDeclaration) {
    return null;
  }
  const declaration = exportDefaultDeclaration.declaration;
  if (declaration.type === 'ArrowFunctionExpression') {
    return ctx.extends(declaration);
  }
  return null;
}

export function parseCode(content: string) {
  const ast = parse(content, {
    plugins: ['jsx', 'typescript'],
    sourceType: 'unambiguous',
  });
  return ast;
}

export interface XmlScript {
  path: string;
  moduleName: string;
}

export function parseXmlScript(
  ctx: ITransformContext<types.File>
): XmlScript[] {
  const imports: types.ImportDeclaration[] = ctx.node.program.body
    .filter((p): p is types.ImportDeclaration => p.type === 'ImportDeclaration')
    .filter((k) => k.source.value.endsWith('.sjs'));

  const nodes: XmlScript[] = [];

  for (const importValue of imports) {
    const specifiers = importValue.specifiers;
    if (importValue.specifiers.length !== 1) {
      throw ctx.throw(importValue, '只支持单个导入');
    }
    const firstSpecifier = specifiers[0];
    if (firstSpecifier.type !== 'ImportDefaultSpecifier') {
      throw ctx.throw(specifiers[0], '暂不支持非默认导入');
    }
    nodes.push({
      path: importValue.source.value.replace(
        /sjs$/,
        ctx.platform.xmlScript.ext
      ),
      moduleName: firstSpecifier.local.name,
    });
  }
  return nodes;
}

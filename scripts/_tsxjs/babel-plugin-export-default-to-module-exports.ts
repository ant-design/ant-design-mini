import * as t from '@babel/types';

export function exportDefaultToModuleExports() {
  return {
    visitor: {
      ExportDefaultDeclaration(path) {
        const declaration = path.get('declaration');
        // 将 export default 转换为 module.exports
        const assignment = t.assignmentExpression(
          '=',
          t.memberExpression(t.identifier('module'), t.identifier('exports')),
          declaration.node,
        );
        path.replaceWith(assignment);
      },
    },
  };
}

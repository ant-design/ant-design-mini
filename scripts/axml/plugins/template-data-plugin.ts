import * as types from '@ali/oxyde-compiler-generator';

export default {
  Element: {
    exit(element, state) {
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
    },
  },
};

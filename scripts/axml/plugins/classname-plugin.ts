import { isBasicComponet } from '../basicComponet';

export default {
  Element: {
    exit(element) {
      const { tagName } = element.node;
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
    },
  },
};

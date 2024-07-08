export default {
  Attribute: {
    enter(attribute) {
      if (attribute.node.is === 'dataset') {
        function dash(str: string) {
          return str.replace(/[A-Z]/g, (v) => '-' + v.toLowerCase());
        }
        attribute.node.name = 'data-' + dash(attribute.node.name.substring(5));
      }
    },
  },
};

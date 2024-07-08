import * as types from '@ali/oxyde-compiler-generator';

const __TRIM_VISITED__ = Symbol('trimVisited');

export default {
  Interpolation(interpolation, state) {
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
  },
};

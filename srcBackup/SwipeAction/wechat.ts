import { platform } from '../_util/platform';

export function transformOptions(original) {
  if (platform() === 'wechat') {
    const { props, didMount, didUpdate, ...rest } = original;
    return {
      ...rest,
      properties: transformProperties(props),
      lifetimes: {
        attached: function () {
          return didMount.call(this);
        },
      },
      options: {
        multipleSlots: true,
        styleIsolation: 'shared',
      },
      observers: {
        'damping, swiped': function () {
          this.setData({
            swipeX: 0,
            swipedR: false,
            swipedL: false,
            tapTypeL: '',
            tapTypeR: '',
          });
        },
        'elasticity': function (elasticity) {
          this.setData({
            swipeX: 0,
            swipedR: false,
            swipedL: false,
            tapTypeL: '',
            tapTypeR: '',
          });
          this.setData({ inertiaWidth: elasticity ? 20 : 0 });
        },
      },
    };
  }
  return {
    ...original,
  };
}

export function transformProperties(props) {
  const properties: any = {};
  Object.keys(props).forEach((key) => {
    properties[key] = {
      type: null,
      value: props[key],
    };
  });
  return properties;
}

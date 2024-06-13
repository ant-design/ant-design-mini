/* eslint-disable @typescript-eslint/no-explicit-any */
import deepEqual from 'fast-deep-equal';
import { getValueFromProps } from '../_util/simply';

function computedData(this: any) {
  const nextData = this.computed(getValueFromProps(this));
  // 浅比较就行了
  const changedData = Object.keys(nextData).reduce((prev, item) => {
    // 移除 _ $ 开头的保留 props
    if (item[0] === '_' || item[0] === '$') {
      return prev;
    }

    if (typeof nextData[item] === 'function') {
      return prev;
    }
    if (deepEqual(this.data[item], nextData[item])) {
      return prev;
    }

    // eslint-disable-next-line no-param-reassign
    prev[item] = nextData[item];
    return prev;
  }, {});

  if (Object.keys(changedData).length === 0) {
    return;
  }

  this.setData(changedData);
}

export default function () {
  let mixin = {
    /// #if ALIPAY
    didMount(): void {
      computedData.call(this);
    },
    didUpdate(): void {
      computedData.call(this);
    },
    /// #endif

    /// #if WECHAT
    attached(): void {
      computedData.call(this);
    },
    observers: {
      '**': function () {
        computedData.call(this);
      },
    },
    /// #endif
  };

  /// #if WECHAT
  // @ts-ignore
  mixin = Behavior(mixin);
  /// #endif

  return mixin;
}

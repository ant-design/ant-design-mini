/* eslint-disable @typescript-eslint/no-explicit-any */
import deepEqual from 'fast-deep-equal';
import { getValueFromProps } from '../_util/simply';
function computedData() {
    var _this = this;
    var nextData = this.computed(getValueFromProps(this));
    // 浅比较就行了
    var changedData = Object.keys(nextData).reduce(function (prev, item) {
        // 移除 _ $ 开头的保留 props
        if (item[0] === '_' || item[0] === '$') {
            return prev;
        }
        if (typeof nextData[item] === 'function') {
            return prev;
        }
        if (deepEqual(_this.data[item], nextData[item])) {
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
    var mixin = {
        attached: function () {
            computedData.call(this);
        },
        observers: {
            '**': function () {
                computedData.call(this);
            },
        },
    };
    // @ts-ignore
    mixin = Behavior(mixin);
    return mixin;
}

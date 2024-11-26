var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import equal from 'fast-deep-equal';
import { Component, getValueFromProps, triggerEvent } from '../_util/simply';
import { StickyProps } from './props';
Component(StickyProps, {
    initTabsObserver: function () {
        var _this = this;
        this.stickyIO
            .relativeTo('.ant-sticky-check')
            .observe('.ant-sticky', function (res) {
            // console.log(res, 'intersectionObserver');
            // console.log(
            //   '相交区域占目标节点的布局区域的比例',
            //   res.intersectionRatio,
            // );
            // console.log('相交区域', res.intersectionRect);
            // console.log('相交区域', res.intersectionRect.height);
            // console.log('参照区域的边界', res.relativeRect);
            // console.log('目标边界', res.boundingClientRect);
            // console.log('时间戳', res.time);
            triggerEvent(_this, 'stickyChange', res.intersectionRatio > 0);
        });
    },
    initHeaderHeight: function (propsHeaderHeight) {
        var _this = this;
        // 如果外部有传入默认的高度，优先使用外部的高度，则不根据 getSystemInfo 获取
        if (propsHeaderHeight !== undefined) {
            this.setData({ headerHeight: propsHeaderHeight });
            // 拿都拿到了，顺便抛出去
            triggerEvent(this, 'getHeaderHeight', propsHeaderHeight);
        }
        else {
            my.getSystemInfo().then(function (res) {
                var headerHeight = (res.statusBarHeight || 47) + (res.titleBarHeight || 44);
                _this.setData({ headerHeight: headerHeight });
                // 拿都拿到了，顺便抛出去
                triggerEvent(_this, 'getHeaderHeight', propsHeaderHeight);
            });
        }
    },
}, {
    headerHeight: 91, // 透明头时的头部高度，单位是px
}, undefined, {
    attached: function () {
        var _a = getValueFromProps(this, ['transparentTitle', 'headerHeight', 'check']), transparentTitle = _a[0], propsHeaderHeight = _a[1], check = _a[2];
        // 如果是透明头，高度默认设为一个iPhoneX的默认高度，并通过JSAPI获取实际的高度进行替换
        if (transparentTitle) {
            this.initHeaderHeight(propsHeaderHeight);
        }
        // 考虑到这个还是有点性能开销，用个属性控制
        if (check) {
            this.stickyIO = this.createIntersectionObserver();
            this.initTabsObserver();
        }
    },
    detached: function () {
        this.stickyIO && this.stickyIO.disconnect();
    },
    observers: {
        '**': function (data) {
            var prevData = this._prevData || this.data;
            this._prevData = __assign({}, data);
            if (!equal(prevData, data)) {
                var _a = getValueFromProps(this, [
                    'sticky',
                    'headerHeight',
                ]), sticky = _a[0], headerHeight = _a[1];
                if (sticky !== data.sticky) {
                    // 考虑到这个还是有点性能开销，用个属性控制
                    if (data.check && !this.stickyIO) {
                        this.stickyIO = this.createIntersectionObserver();
                        this.initTabsObserver();
                    }
                }
                if (headerHeight !== data.headerHeight) {
                    this.initHeaderHeight(data.headerHeight);
                }
            }
        },
    },
});

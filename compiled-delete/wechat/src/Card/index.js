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
import { Component, getValueFromProps, triggerEvent, triggerEventOnly, } from '../_util/simply';
import { CardDefaultProps } from './props';
Component(CardDefaultProps, {
    // 点击展开收起按钮
    handleTapFoldBtn: function (e) {
        var _a = this.data, _b = _a.finalConfig, finalConfig = _b === void 0 ? {} : _b, finalFoldStatus = _a.finalFoldStatus;
        if (finalConfig.foldTapArea === 'btn') {
            this.setData({
                finalFoldStatus: !finalFoldStatus,
            });
            triggerEvent(this, 'foldChange', !finalFoldStatus, e);
        }
    },
    // 点击标题整栏
    handleTapCardHeader: function (e) {
        var _a = this.data, _b = _a.finalConfig, finalConfig = _b === void 0 ? {} : _b, finalFoldStatus = _a.finalFoldStatus;
        if (finalConfig.foldTapArea === 'header' && this.props.needFold) {
            this.setData({
                finalFoldStatus: !finalFoldStatus,
            });
            triggerEvent(this, 'foldChange', !finalFoldStatus, e);
        }
    },
    // 点击更多
    handleTapLink: function (e) {
        triggerEventOnly(this, 'operateClick', e);
    },
    // 处理title的sticky状态变化
    handleStickyChange: function (status) {
        triggerEvent(this, 'titleSticky', status);
    },
}, {
    finalFoldStatus: false,
}, undefined, {
    attached: function () {
        var _a = getValueFromProps(this, [
            'foldStatus',
            'config',
        ]), foldStatus = _a[0], config = _a[1];
        this.setData({
            finalFoldStatus: foldStatus,
            finalConfig: __assign(__assign({}, CardDefaultProps.config), config),
        });
    },
    observers: {
        '**': function (data) {
            var prevData = this._prevData || this.data;
            this._prevData = __assign({}, data);
            if (prevData.foldStatus !== data.foldStatus) {
                this.setData({
                    finalFoldStatus: data.foldStatus,
                });
            }
        },
    },
});

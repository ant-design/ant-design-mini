import { Component, triggerEventOnly, getValueFromProps, } from '../_util/simply';
import { ToastDefaultProps } from './props';
Component(ToastDefaultProps, {
    closeMask: function () {
        if (this.timer) {
            clearTimeout(this.timer);
        }
        this.setData({ show: false });
        this.timer = null;
        triggerEventOnly(this, 'close');
    },
    handleShowToast: function () {
        var _this = this;
        this.setData({ show: true });
        var duration = getValueFromProps(this, 'duration');
        if (duration > 0) {
            var timer = setTimeout(function () {
                _this.closeMask();
            }, duration);
            this.timer = timer;
        }
    },
    handleClickMask: function () {
        var _a = getValueFromProps(this, [
            'showMask',
            'maskCloseable',
        ]), showMask = _a[0], maskCloseable = _a[1];
        if (showMask && maskCloseable) {
            this.closeMask();
        }
    },
}, {
    show: false,
}, undefined, {
    timer: null,
    observers: {
        'visible': function (visible) {
            if (visible) {
                this.handleShowToast();
            }
            else if (!visible && this.data.show) {
                this.closeMask();
            }
        },
        'content': function (content) {
            this.setData({
                displayContent: content === 'string' ? content.substring(0, 24) : content,
            });
        },
    },
    attached: function () {
        var visible = getValueFromProps(this, 'visible');
        if (visible) {
            this.handleShowToast();
        }
    },
});

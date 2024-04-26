import { Component, triggerEventOnly, } from '../_util/simply';
import { PopupDefaultProps } from './props';
import { isOldSDKVersion } from '../_util/platform';
var isOldVersion = isOldSDKVersion();
Component(PopupDefaultProps, {
    onTapMask: function () {
        var closing = this.data.closing;
        if (closing) {
            return;
        }
        triggerEventOnly(this, 'close');
    },
    onAnimationEnd: function () {
        var closing = this.data.closing;
        if (closing) {
            this.setData({ closing: false });
        }
    },
}, {
    closing: false,
    isOldVersion: isOldVersion,
}, undefined, {
    observers: {
        'visible': function (nextProps) {
            var visible = nextProps.visible, duration = nextProps.duration, animation = nextProps.animation;
            var enableAnimation = animation && duration > 0;
            if (enableAnimation && !visible) {
                this.setData({ closing: true });
            }
        },
    },
});

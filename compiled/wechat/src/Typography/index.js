import { Component, getValueFromProps, triggerCatchEvent, triggerEventOnly, } from '../_util/simply';
import { TypographyDefaultProps } from './props';
Component(TypographyDefaultProps, {
    onTap: function (e) {
        var disabled = getValueFromProps(this, 'disabled');
        if (disabled) {
            triggerEventOnly(this, 'disabledTap', e);
            return;
        }
        triggerEventOnly(this, 'tap', e);
    },
    catchTap: function (e) {
        var disabled = getValueFromProps(this, 'disabled');
        if (disabled) {
            triggerEventOnly(this, 'disabledTap', e);
            return;
        }
        triggerCatchEvent(this, 'catchTap', e);
    },
}, { phonemodel: '' }, null, {
    attached: function () {
        // @ts-ignore
        var platform = wx.getDeviceInfo().platform;
        var p = '';
        if (platform === 'android') {
            p = 'Android';
        }
        else {
            p = 'iOS';
        }
        this.setData({
            phonemodel: p,
        });
    },
});

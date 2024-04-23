import { Component, triggerEvent } from '../../_util/simply';
import { InputBlurDefaultProps } from './props';
import mixinValue from '../../mixins/value';
Component(InputBlurDefaultProps, {
    onChange: function (e) {
        var value = e.detail.value;
        if (this.isControlled()) {
            this.update(value, {}, true);
        }
        triggerEvent(this, 'change', value, e);
    },
    onFocus: function (e) {
        var value = e.detail.value;
        this.focus = true;
        triggerEvent(this, 'focus', value, e);
    },
    onBlur: function (e) {
        var value = e.detail.value;
        this.focus = false;
        if (this.isControlled()) {
            this.update(this.props.value);
        }
        triggerEvent(this, 'blur', value, e);
    },
    onConfirm: function (e) {
        var value = e.detail.value;
        triggerEvent(this, 'confirm', value, e);
    },
}, undefined, [
    mixinValue({
        scopeKey: 'state',
        transformValue: function (value, extra, updateWithoutFocusCheck) {
            if (!updateWithoutFocusCheck && this.focus) {
                return {
                    needUpdate: false,
                };
            }
            return {
                needUpdate: true,
                value: value,
            };
        },
    }),
], {
    focus: false,
});

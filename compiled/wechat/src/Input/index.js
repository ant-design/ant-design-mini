import { Component, triggerEvent } from '../_util/simply';
import { InputFunctionalProps } from './props';
import mixinValue from '../mixins/value';
Component(InputFunctionalProps, {
    onChange: function (e) {
        var value = e.detail.value;
        if (!this.isControlled()) {
            this.update(value);
        }
        triggerEvent(this, 'change', value, e);
    },
    onFocus: function (e) {
        var value = e.detail.value;
        this.setData({
            selfFocus: true,
        });
        triggerEvent(this, 'focus', value, e);
    },
    onBlur: function (e) {
        var value = e.detail.value;
        this.setData({
            selfFocus: false,
        });
        triggerEvent(this, 'blur', value, e);
    },
    onConfirm: function (e) {
        var value = e.detail.value;
        triggerEvent(this, 'confirm', value, e);
    },
    onClear: function (e) {
        if (!this.isControlled()) {
            this.update('');
        }
        triggerEvent(this, 'change', '', e);
    },
}, {
    selfFocus: false,
}, [mixinValue({ scopeKey: 'state' })], {
    attached: function () {
        this.triggerEvent('ref', this);
    },
});

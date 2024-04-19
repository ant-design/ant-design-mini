import { Component, triggerEventValues } from '../_util/simply';
import { InputFunctionalProps } from './props';
import mixinValue from '../mixins/value';
Component(InputFunctionalProps, {
    onChange: function (e) {
        var value = e.detail.value;
        if (!this.isControlled()) {
            this.update(value);
        }
        triggerEventValues(this, 'change', [value], e);
    },
    onFocus: function (e) {
        var value = e.detail.value;
        this.setData({
            selfFocus: true,
        });
        triggerEventValues(this, 'focus', [value], e);
    },
    onBlur: function (e) {
        var value = e.detail.value;
        this.setData({
            selfFocus: false,
        });
        triggerEventValues(this, 'blur', [value], e);
    },
    onConfirm: function (e) {
        var value = e.detail.value;
        triggerEventValues(this, 'confirm', [value], e);
    },
    onClear: function (e) {
        if (!this.isControlled()) {
            this.update('');
        }
        triggerEventValues(this, 'change', [''], e);
    },
}, {
    selfFocus: false,
}, [mixinValue({ scopeKey: 'state' })]);

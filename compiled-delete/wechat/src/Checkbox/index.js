import { CheckboxDefaultProps } from './props';
import { Component, triggerEvent } from '../_util/simply';
import mixinValue from '../mixins/value';
Component(CheckboxDefaultProps, {
    onChange: function (e) {
        var value = !this.getValue();
        if (!this.isControlled()) {
            this.update(value);
        }
        triggerEvent(this, 'change', value, e);
    },
}, null, [
    mixinValue({
        valueKey: 'checked',
        defaultValueKey: 'defaultChecked',
    }),
]);

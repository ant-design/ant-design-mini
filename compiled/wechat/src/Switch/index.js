import { Component, triggerEvent } from '../_util/simply';
import { SwitchDefaultProps } from './props';
import mixinValue from '../mixins/value';
Component(SwitchDefaultProps, {
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

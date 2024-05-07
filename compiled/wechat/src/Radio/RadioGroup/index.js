import { Component, triggerEvent } from '../../_util/simply';
import { RadioGroupDefaultProps } from './props';
import mixinValue from '../../mixins/value';
Component(RadioGroupDefaultProps, {
    onChange: function (e) {
        var index = e.currentTarget.dataset.index;
        var value = this.properties.options[index].value;
        if (!this.isControlled()) {
            this.update(value);
        }
        triggerEvent(this, 'change', value, e);
    },
}, null, [mixinValue()]);

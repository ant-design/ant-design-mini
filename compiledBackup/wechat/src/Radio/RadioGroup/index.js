import { Component, triggerEvent, getValueFromProps } from '../../_util/simply';
import { RadioGroupDefaultProps } from './props';
import mixinValue from '../../mixins/value';
Component(RadioGroupDefaultProps, {
    onChange: function (_, e) {
        var event;
        event = _;
        var index = event.currentTarget.dataset.index;
        var options = getValueFromProps(this, 'options');
        var value = options[index].value;
        if (!this.isControlled()) {
            this.update(value);
        }
        triggerEvent(this, 'change', value, event);
    },
}, null, [mixinValue()]);

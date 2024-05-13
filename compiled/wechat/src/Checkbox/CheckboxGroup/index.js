var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { Component, triggerEvent, getValueFromProps } from '../../_util/simply';
import { CheckboxGroupDefaultProps } from './props';
import mixinValue from '../../mixins/value';
Component(CheckboxGroupDefaultProps, {
    onChange: function (args, e) {
        if (getValueFromProps(this, 'disabled')) {
            return;
        }
        var event;
        event = args;
        var currentValue = this.getValue();
        var index = event.currentTarget.dataset.index;
        var selectValue = getValueFromProps(this, 'options')[index].value;
        if (currentValue.indexOf(selectValue) > -1) {
            currentValue = currentValue.filter(function (v) { return v !== selectValue; });
        }
        else {
            currentValue = __spreadArray(__spreadArray([], currentValue, true), [selectValue], false);
        }
        if (!this.isControlled()) {
            this.update(currentValue);
        }
        triggerEvent(this, 'change', currentValue, e);
    },
}, null, [
    mixinValue({
        transformValue: function (val) {
            var value = val || [];
            return {
                needUpdate: true,
                value: value,
            };
        },
    }),
]);

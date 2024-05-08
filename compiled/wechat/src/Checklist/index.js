var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { Component, triggerEventValues, getValueFromProps, } from '../_util/simply';
import { ChecklistDefaultProps } from './props';
import mixinValue from '../mixins/value';
Component(ChecklistDefaultProps, {
    onChange: function (item) {
        var _a = getValueFromProps(this, [
            'multiple',
            'options',
        ]), multiple = _a[0], options = _a[1];
        var value;
        value = item.detail.value;
        if (multiple) {
            var currentValue_1 = this.getValue();
            if (currentValue_1.indexOf(value) > -1) {
                currentValue_1 = currentValue_1.filter(function (v) { return v !== value; });
            }
            else {
                currentValue_1 = __spreadArray(__spreadArray([], currentValue_1, true), [value], false);
            }
            if (!this.isControlled()) {
                this.update(currentValue_1);
            }
            triggerEventValues(this, 'change', [
                currentValue_1,
                options.filter(function (v) { return currentValue_1.indexOf(v.value) > -1; }),
            ]);
        }
        else {
            if (!this.isControlled()) {
                this.update(value);
            }
            triggerEventValues(this, 'change', [
                value,
                options.find(function (v) { return v.value === value; }),
            ]);
        }
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

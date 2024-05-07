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
import { SelectorDefaultProps } from './props';
import mixinValue from '../mixins/value';
Component(SelectorDefaultProps, {
    onChange: function (e) {
        var _a = e.currentTarget.dataset, disabled = _a.disabled, value = _a.value;
        var _b = getValueFromProps(this, [
            'multiple',
            'options',
            'maxSelectedCount',
            'minSelectedCount',
            'disabled',
        ]), multiple = _b[0], options = _b[1], maxSelectedCount = _b[2], minSelectedCount = _b[3], disabledFromProps = _b[4];
        if (disabled || disabledFromProps) {
            return;
        }
        if (multiple) {
            var currentValue_1 = this.getValue() || [];
            if (currentValue_1.indexOf(value) > -1) {
                if (typeof minSelectedCount === 'number' &&
                    currentValue_1.length <= minSelectedCount) {
                    triggerEventValues(this, 'selectMin', [value, options.find(function (v) { return v.value === value; })], e);
                    return;
                }
                currentValue_1 = currentValue_1.filter(function (v) { return v !== value; });
            }
            else {
                if (typeof maxSelectedCount === 'number' &&
                    currentValue_1.length >= maxSelectedCount) {
                    triggerEventValues(this, 'selectMax', [value, options.find(function (v) { return v.value === value; })], e);
                    return;
                }
                currentValue_1 = __spreadArray(__spreadArray([], currentValue_1, true), [value], false);
            }
            if (!this.isControlled()) {
                this.update(currentValue_1);
            }
            triggerEventValues(this, 'change', [
                currentValue_1,
                options.filter(function (v) { return currentValue_1.indexOf(v.value) > -1; }),
            ], e);
        }
        else {
            if (value === this.getValue()) {
                if (minSelectedCount === 1) {
                    triggerEventValues(this, 'selectMin', [value, options.find(function (v) { return v.value === value; })], e);
                    return;
                }
                if (!this.isControlled()) {
                    this.update(undefined);
                }
                triggerEventValues(this, 'change', [undefined, undefined], e);
            }
            else {
                if (!this.isControlled()) {
                    this.update(value);
                }
                triggerEventValues(this, 'change', [value, options.find(function (v) { return v.value === value; })], e);
            }
        }
    },
}, null, [mixinValue()]);

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { useEvent } from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { useMixState } from '../_util/hooks/useMixState';
import { SelectorFunctionalProps } from './props';
var Selector = function (props) {
    var _a = useMixState(props.defaultValue, {
        value: props.value,
    }), selectorValue = _a[0], _b = _a[1], isControlled = _b.isControlled, update = _b.update;
    var triggerEventValues = useComponentEvent(props).triggerEventValues;
    useEvent('onChange', function (e) {
        var _a = e.currentTarget.dataset, disabled = _a.disabled, value = _a.value;
        var multiple = props.multiple, options = props.options, maxSelectedCount = props.maxSelectedCount, minSelectedCount = props.minSelectedCount;
        if (disabled || props.disabled) {
            return;
        }
        if (multiple) {
            var currentValue_1 = selectorValue || [];
            if (currentValue_1.indexOf(value) > -1) {
                if (typeof minSelectedCount === 'number' &&
                    currentValue_1.length <= minSelectedCount) {
                    triggerEventValues('selectMin', [value, options.find(function (v) { return v.value === value; })], e);
                    return;
                }
                currentValue_1 = currentValue_1.filter(function (v) { return v !== value; });
            }
            else {
                if (typeof maxSelectedCount === 'number' &&
                    currentValue_1.length >= maxSelectedCount) {
                    triggerEventValues('selectMax', [value, options.find(function (v) { return v.value === value; })], e);
                    return;
                }
                currentValue_1 = __spreadArray(__spreadArray([], currentValue_1, true), [value], false);
            }
            if (!isControlled) {
                update(currentValue_1);
            }
            triggerEventValues('change', [
                currentValue_1,
                options.filter(function (v) { return currentValue_1.indexOf(v.value) > -1; }),
            ], e);
        }
        else {
            if (value === selectorValue) {
                if (minSelectedCount === 1) {
                    triggerEventValues('selectMin', [value, options.find(function (v) { return v.value === value; })], e);
                    return;
                }
                if (!isControlled) {
                    update(undefined);
                }
                triggerEventValues('change', [undefined, undefined], e);
            }
            else {
                if (!isControlled) {
                    update(value);
                }
                triggerEventValues('change', [value, options.find(function (v) { return v.value === value; })], e);
            }
        }
    });
    return {
        mixin: {
            value: selectorValue,
        },
    };
};
mountComponent(Selector, SelectorFunctionalProps);

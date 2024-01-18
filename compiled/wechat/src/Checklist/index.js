var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { useHandleCustomEvent } from '../_util/hooks/useHandleCustomEvent';
import { useMixState } from '../_util/hooks/useMixState';
import { ChecklistFunctionalProps, } from './props';
var Checkbox = function (props) {
    var _a = useMixState(props.defaultValue, {
        value: props.value,
        postState: function (val) {
            var value = val || [];
            return {
                valid: true,
                value: value,
            };
        },
    }), state = _a[0], _b = _a[1], isControlled = _b.isControlled, update = _b.update;
    var triggerEventValues = useComponentEvent(props).triggerEventValues;
    useHandleCustomEvent('onChange', function (item) {
        var multiple = props.multiple, options = props.options;
        var value = item.value;
        if (multiple) {
            var currentValue_1 = state;
            if (currentValue_1.indexOf(value) > -1) {
                currentValue_1 = currentValue_1.filter(function (v) { return v !== value; });
            }
            else {
                currentValue_1 = __spreadArray(__spreadArray([], currentValue_1, true), [value], false);
            }
            if (!isControlled) {
                update(currentValue_1);
            }
            triggerEventValues('change', [
                currentValue_1,
                options.filter(function (v) { return currentValue_1.indexOf(v.value) > -1; }),
            ]);
        }
        else {
            if (!isControlled) {
                update(value);
            }
            triggerEventValues('change', [
                value,
                options.find(function (v) { return v.value === value; }),
            ]);
        }
    });
    return {
        mixin: {
            value: state,
        },
    };
};
mountComponent(Checkbox, ChecklistFunctionalProps);

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
import { mountComponent } from '../../_util/component';
import { useComponentEvent } from '../../_util/hooks/useComponentEvent';
import { useMixState } from '../../_util/hooks/useMixState';
import { CheckboxGroupFunctionalProps } from './props';
var CheckboxGroup = function (props) {
    var _a = useMixState(props.defaultValue, {
        value: props.value,
        postState: function (value) {
            return {
                valid: true,
                value: value || [],
            };
        },
    }), value = _a[0], _b = _a[1], isControlled = _b.isControlled, update = _b.update;
    var triggerEvent = useComponentEvent(props).triggerEvent;
    useEvent('onChange', function (args, e) {
        if (props.disabled) {
            return;
        }
        var event;
        event = args;
        var currentValue = value;
        var index = event.currentTarget.dataset.index;
        var selectValue = props.options[index].value;
        if (currentValue.indexOf(selectValue) > -1) {
            currentValue = currentValue.filter(function (v) { return v !== selectValue; });
        }
        else {
            currentValue = __spreadArray(__spreadArray([], currentValue, true), [selectValue], false);
        }
        if (!isControlled) {
            update(currentValue);
        }
        triggerEvent('change', currentValue, e);
    });
    return {
        mixin: { value: value },
    };
};
mountComponent(CheckboxGroup, CheckboxGroupFunctionalProps);

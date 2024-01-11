import { useEvent } from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { useMixState } from '../_util/hooks/useMixState';
import { resolveEventValue } from '../_util/platform';
import { StepperFunctionalProps } from './props';
import { getPrecision, getValidNumber } from './utils';
var Stepper = function (props) {
    var _a = useMixState(props.defaultValue, {
        value: props.value,
        postState: function (num, precision) {
            var _a = getValidNumber(num, props.min, props.max, props.step, precision >= 0 ? precision : props.precision), valid = _a.valid, value = _a.value;
            if (valid) {
                return { valid: valid, value: value };
            }
            return { valid: false };
        },
    }), value = _a[0], _b = _a[1], isControlled = _b.isControlled, update = _b.update;
    var triggerEvent = useComponentEvent(props).triggerEvent;
    var toNumber = function (v) { return (v === '' ? null : Number(v)); };
    useEvent('onFocus', function (e) {
        triggerEvent('focus', toNumber(value), e);
    });
    useEvent('onChange', function (v, event) {
        var state = update(resolveEventValue(v));
        if (state.changed) {
            triggerEvent('change', toNumber(state.newValue), event);
        }
    });
    useEvent('onConfirm', function (_v, event) {
        triggerEvent('confirm', value === '' ? null : Number(value), event);
    });
    useEvent('onBlur', function (_v, event) {
        if (isControlled) {
            var state = update(props.value);
            if (state.changed) {
                triggerEvent('blur', state.newValue === '' ? null : Number(state.newValue), event);
            }
            else {
                triggerEvent('blur', value === '' ? null : Number(value), event);
            }
        }
        else {
            triggerEvent('blur', value === '' ? null : Number(value), event);
        }
    });
    useEvent('onTap', function (e) {
        var step = props.step, disabled = props.disabled, _a = props.min, min = _a === void 0 ? -Infinity : _a, _b = props.max, max = _b === void 0 ? Infinity : _b;
        var newValue = Number(value);
        if (!disabled) {
            var mode = e.currentTarget.dataset.mode;
            var result = newValue;
            var precision = typeof props.precision === 'number' && props.precision >= 0
                ? props.precision
                : Math.max(getPrecision(newValue), getPrecision(step));
            if (mode === 'minus') {
                result = newValue - step;
                if (result < min) {
                    result = min;
                }
            }
            else if (mode === 'add') {
                result = newValue + step;
                if (result > max) {
                    result = max;
                }
            }
            if (!isControlled) {
                var changed = update(result, precision).changed;
                if (!changed) {
                    return;
                }
            }
            var validValue = getValidNumber(result, min, max, step, precision).value;
            triggerEvent('change', Number(validValue), e);
        }
    });
    return { mixin: { value: value } };
};
mountComponent(Stepper, StepperFunctionalProps);

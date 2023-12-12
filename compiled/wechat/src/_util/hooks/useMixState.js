import { useEvent } from './useEvent';
import { useComponentUpdateEffect } from './useLayoutEffect';
import { hasValue } from './useMergedState';
import { useSafeState as useState } from './useState';
export function useMixState(defaultStateValue, option) {
    var _a = option || {}, defaultValue = _a.defaultValue, value = _a.value, _b = _a.postState, postState = _b === void 0 ? function (v) { return ({ valid: true, value: v }); } : _b;
    // ======================= Init =======================
    var _c = useState(function () {
        var v;
        if (hasValue(value)) {
            v = value;
        }
        else if (hasValue(defaultValue)) {
            v =
                typeof defaultValue === 'function'
                    ? defaultValue()
                    : defaultValue;
        }
        else {
            v =
                typeof defaultStateValue === 'function'
                    ? defaultStateValue()
                    : defaultStateValue;
        }
        var state = postState(v);
        if (state.valid) {
            return state.value;
        }
    }), innerValue = _c[0], setInnerValue = _c[1];
    var state = postState(value);
    var merge = hasValue(value) && state.valid ? state.value : innerValue;
    useComponentUpdateEffect(function () {
        var state = postState(value);
        if (state.valid) {
            setInnerValue(state.value);
        }
    }, [value]);
    var isControlled = hasValue(value);
    var triggerChange = useEvent(function (newState, ignoreDestroy) {
        setInnerValue(newState, ignoreDestroy);
    });
    var triggerUpdate = useEvent(function (value, option) {
        var state = postState(value, option);
        if (state.valid && state.value !== innerValue) {
            triggerChange(state.value);
            return { changed: true, newValue: state.value };
        }
        return { changed: false };
    });
    var triggerUpdater = useEvent(function (getValue, option) {
        if (isControlled) {
            getValue(merge);
        }
        else {
            triggerChange(function (old) {
                var newValue = getValue(old);
                var state = postState(newValue, option);
                if (state.valid && state.value !== innerValue) {
                    return state.value;
                }
                return old;
            });
        }
    });
    return [
        merge,
        {
            isControlled: isControlled,
            update: triggerUpdate,
            triggerUpdater: triggerUpdater,
        },
    ];
}

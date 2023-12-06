/**
 * copy from https://github.com/react-component/util/blob/9d5cb8946da29e690bead78b2c251da6f7cbd0eb/src/hooks/useMergedState.ts
 */
import { useEvent } from './useEvent';
import { useComponentUpdateEffect } from './useLayoutEffect';
import { useSafeState as useState } from './useState';
import { supportUndefinedProperty } from '../platform';
/** We only think `undefined` is empty */
export function hasValue(value) {
    if (supportUndefinedProperty()) {
        return value !== undefined;
    }
    return value !== null && value !== undefined;
}
/**
 * Similar to `useState` but will use props value if provided.
 * Note that internal use rc-util `useState` hook.
 */
export function useMergedState(defaultStateValue, option) {
    var _a = option || {}, defaultValue = _a.defaultValue, value = _a.value, onChange = _a.onChange, postState = _a.postState;
    // ======================= Init =======================
    var _b = useState(function () {
        if (hasValue(value)) {
            return value;
        }
        else if (hasValue(defaultValue)) {
            return typeof defaultValue === 'function'
                ? defaultValue()
                : defaultValue;
        }
        else {
            return typeof defaultStateValue === 'function'
                ? defaultStateValue()
                : defaultStateValue;
        }
    }), innerValue = _b[0], setInnerValue = _b[1];
    var mergedValue = hasValue(value) ? value : innerValue;
    var postMergedValue = postState ? postState(mergedValue) : mergedValue;
    // ====================== Change ======================
    var onChangeFn = useEvent(onChange);
    var _c = useState([mergedValue]), prevValue = _c[0], setPrevValue = _c[1];
    useComponentUpdateEffect(function () {
        var prev = prevValue[0];
        if (innerValue !== prev) {
            onChangeFn(innerValue, prev);
        }
    }, [prevValue]);
    // Sync value back to `undefined` when it from control to un-control
    useComponentUpdateEffect(function () {
        if (!hasValue(value)) {
            setInnerValue(value);
        }
    }, [value]);
    // ====================== Update ======================
    var triggerChange = useEvent(function (updater, ignoreDestroy) {
        setInnerValue(updater, ignoreDestroy);
        setPrevValue([mergedValue], ignoreDestroy);
    });
    return [postMergedValue, triggerChange];
}

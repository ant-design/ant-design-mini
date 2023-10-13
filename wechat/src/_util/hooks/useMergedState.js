/**
 * copy from https://github.com/react-component/util/blob/9d5cb8946da29e690bead78b2c251da6f7cbd0eb/src/hooks/useMergedState.ts
 */
import { useEvent } from './useEvent';
import { useLayoutUpdateEffect } from './useLayoutEffect';
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
    const { defaultValue, value, onChange, postState } = option || {};
    // ======================= Init =======================
    const [innerValue, setInnerValue] = useState(() => {
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
    });
    const mergedValue = hasValue(value) ? value : innerValue;
    const postMergedValue = postState ? postState(mergedValue) : mergedValue;
    // ====================== Change ======================
    const onChangeFn = useEvent(onChange);
    const [prevValue, setPrevValue] = useState([mergedValue]);
    useLayoutUpdateEffect(() => {
        const prev = prevValue[0];
        if (innerValue !== prev) {
            onChangeFn(innerValue, prev);
        }
    }, [prevValue]);
    // Sync value back to `undefined` when it from control to un-control
    useLayoutUpdateEffect(() => {
        if (!hasValue(value)) {
            setInnerValue(value);
        }
    }, [value]);
    // ====================== Update ======================
    const triggerChange = useEvent((updater, ignoreDestroy) => {
        setInnerValue(updater, ignoreDestroy);
        setPrevValue([mergedValue], ignoreDestroy);
    });
    return [postMergedValue, triggerChange];
}

/**
 * copy from https://github.com/react-component/util/blob/9d5cb8946da29e690bead78b2c251da6f7cbd0eb/src/hooks/useMergedState.ts
 */
import { useEvent } from './useEvent';
import { useComponentUpdateEffect } from './useLayoutEffect';
import { useSafeState as useState } from './useState';
import { supportUndefinedProperty } from '../platform';

type Updater<T> = (
  updater: T | ((origin: T) => T),
  ignoreDestroy?: boolean
) => void;

/** We only think `undefined` is empty */
export function hasValue(value: any) {
  if (supportUndefinedProperty()) {
    return value !== undefined;
  }
  return value !== null && value !== undefined;
}

/**
 * Similar to `useState` but will use props value if provided.
 * Note that internal use rc-util `useState` hook.
 */
export function useMergedState<T, R = T>(
  defaultStateValue: T | (() => T),
  option?: {
    defaultValue?: T | (() => T);
    value?: T;
    onChange?: (value: T, prevValue: T) => void;
    postState?: (value: T) => T;
  }
): [R, Updater<T>] {
  const { defaultValue, value, onChange, postState } = option || {};

  // ======================= Init =======================
  const [innerValue, setInnerValue] = useState<T>(() => {
    if (hasValue(value)) {
      return value;
    } else if (hasValue(defaultValue)) {
      return typeof defaultValue === 'function'
        ? (defaultValue as any)()
        : defaultValue;
    } else {
      return typeof defaultStateValue === 'function'
        ? (defaultStateValue as any)()
        : defaultStateValue;
    }
  });

  const mergedValue = hasValue(value) ? value : innerValue;
  const postMergedValue = postState ? postState(mergedValue) : mergedValue;

  // ====================== Change ======================
  const onChangeFn = useEvent(onChange);

  const [prevValue, setPrevValue] = useState<[T]>([mergedValue]);

  useComponentUpdateEffect(() => {
    const prev = prevValue[0];
    if (innerValue !== prev) {
      onChangeFn(innerValue, prev);
    }
  }, [prevValue]);

  // Sync value back to `undefined` when it from control to un-control
  useComponentUpdateEffect(() => {
    if (!hasValue(value)) {
      setInnerValue(value);
    }
  }, [value]);

  // ====================== Update ======================
  const triggerChange: Updater<T> = useEvent((updater, ignoreDestroy) => {
    setInnerValue(updater, ignoreDestroy);
    setPrevValue([mergedValue], ignoreDestroy);
  });

  return [postMergedValue as unknown as R, triggerChange];
}

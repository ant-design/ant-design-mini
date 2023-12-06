import { useEvent } from './useEvent';
import { useComponentUpdateEffect } from './useLayoutEffect';
import { hasValue } from './useMergedState';
import { useSafeState as useState } from './useState';

type Updater<T> = (updater: T, ignoreDestroy?: boolean) => void;

export function useMixState<T, R = T, O = undefined>(
  defaultStateValue: T | (() => T),
  option?: {
    defaultValue?: T | (() => T);
    value?: T;
    postState?: (
      value: T,
      option?: O
    ) => { valid: true; value: T } | { valid: false };
  }
): [
  R,
  {
    isControlled: boolean;
    update(
      value: T,
      option?: O
    ): { changed: true; newValue: T } | { changed: false };
  }
] {
  const {
    defaultValue,
    value,
    postState = (v) => ({ valid: true, value: v }),
  } = option || {};

  // ======================= Init =======================
  const [innerValue, setInnerValue] = useState<T>(() => {
    let v;
    if (hasValue(value)) {
      v = value;
    } else if (hasValue(defaultValue)) {
      v =
        typeof defaultValue === 'function'
          ? (defaultValue as any)()
          : defaultValue;
    } else {
      v =
        typeof defaultStateValue === 'function'
          ? (defaultStateValue as any)()
          : defaultStateValue;
    }
    const state = postState(v);
    if (state.valid) {
      return state.value;
    }
  });

  const state = postState(value);
  const merge = hasValue(value) && state.valid ? state.value : innerValue;

  useComponentUpdateEffect(() => {
    const state = postState(value);
    if (state.valid) {
      setInnerValue(state.value);
    }
  }, [value]);

  const triggerChange: Updater<T> = useEvent((newState, ignoreDestroy) => {
    setInnerValue(newState, ignoreDestroy);
  });

  const triggerUpdate = useEvent((value, option) => {
    const state = postState(value, option);
    if (state.valid && state.value !== innerValue) {
      triggerChange(state.value);
      return { changed: true, newValue: state.value };
    }
    return { changed: false };
  });
  const isControlled = hasValue(value);
  return [
    merge as unknown as R,
    {
      isControlled,
      update: triggerUpdate as any,
    },
  ];
}

import { useEvent, useState } from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import useLayoutEffect from '../_util/hooks/useLayoutEffect';
import { hasValue, useMergedState } from '../_util/hooks/useMergedState';
import { triggerRefEvent } from '../_util/hooks/useReportRef';
import { InputProps } from './props';

const Input = (props: InputProps) => {
  const isControlled = hasValue(props.controlled)
    ? !!props.controlled
    : hasValue(props.value);

  let option: any = {
    value: props.value,
  };
  if (!isControlled && hasValue(props.value)) {
    option = {
      defaultValue: props.value,
    };
  }

  /// #if WECHAT
  const [counter, setCounter] = useState(0);
  /// #endif

  const [value, updateValue] = useMergedState(props.defaultValue, option);
  const [selfFocus, setSelfFocus] = useState(false);
  const { triggerEvent } = useComponentEvent(props);
  triggerRefEvent();
  useLayoutEffect(
    (mount) => {
      if (!isControlled && !mount) {
        updateValue(props.value);
      }
    },
    [props.value]
  );
  useEvent(
    'onChange',
    (e) => {
      const newValue = e.detail.value;
      if (!isControlled) {
        updateValue(newValue);
      } else {
        /// #if WECHAT
        setCounter((c) => c + 1);
        /// #endif
      }
      triggerEvent('change', newValue, e);
    },
    []
  );

  useEvent(
    'onFocus',
    (e) => {
      const newValue = e.detail.value;
      setSelfFocus(true);
      triggerEvent('focus', newValue, e);
    },
    []
  );

  useEvent(
    'onBlur',
    (e) => {
      const newValue = e.detail.value;
      setSelfFocus(false);
      triggerEvent('blur', newValue, e);
    },
    []
  );

  useEvent(
    'onConfirm',
    (e) => {
      const newValue = e.detail.value;
      triggerEvent('confirm', newValue, e);
    },
    []
  );
  useEvent(
    'onClear',
    (e) => {
      if (!isControlled) {
        updateValue('');
      }
      triggerEvent('change', '', e);
    },
    []
  );

  useEvent(
    'update',
    (e) => {
      if (isControlled) {
        return;
      }
      updateValue(e);
    },
    []
  );

  return {
    /// #if WECHAT
    counter,
    /// #endif
    mixin: {
      value,
      controlled: isControlled,
    },
    selfFocus,
  };
};

mountComponent<InputProps>(Input, {
  type: null,
  value: null,
  defaultValue: null,
  placeholder: null,
  placeholderClassName: null,
  placeholderStyle: null,
  allowClear: null,
  enableNative: null,
  confirmType: null,
  confirmHold: null,
  controlled: null,
  alwaysSystem: null,
  selectionStart: null,
  selectionEnd: null,
  cursor: null,
  /// #if WECHAT
  maxLength: -1,
  /// #endif
  inputClassName: null,
  inputStyle: null,
  password: null,
  prefix: null,
  disabled: null,
  focusClassName: null,
  suffix: null,
  focus: null,
  name: null,
  focusStyle: null,
  randomNumber: null,
});

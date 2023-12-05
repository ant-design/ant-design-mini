import { useEffect, useEvent, useRef } from 'functional-mini/component';
import { mountComponent } from '../../_util/component';
import { useComponentEvent } from '../../_util/hooks/useComponentEvent';
import { hasValue, useMergedState } from '../../_util/hooks/useMergedState';
import { InputBlurProps } from './props';

const InputBlur = (props: InputBlurProps) => {
  const isControlled = hasValue(props.controlled)
    ? !!props.controlled
    : hasValue(props.value);

  const [value, doUpdateValue] = useMergedState(props.defaultValue, {
    // 因为受控模式下 value 也是会随着 props.value 变化的, 所以这里不需要判断是否受控
    defaultValue: props.value,
  });
  function updateValue(value, updateWithoutFocusCheck?: boolean) {
    if (!updateWithoutFocusCheck && focusRef.current) {
      return;
    }
    doUpdateValue(value);
  }

  const focusRef = useRef(false);

  useEffect(() => {
    if (!focusRef.current) {
      doUpdateValue(props.value);
    }
  }, [props, focusRef]);

  const { triggerEvent } = useComponentEvent(props);
  useEvent('onChange', (e) => {
    const newValue = e.detail.value;
    if (isControlled) {
      updateValue(newValue, true);
    }
    triggerEvent('change', newValue, e);
  });

  useEvent('onFocus', (e) => {
    const newValue = e.detail.value;
    focusRef.current = true;
    triggerEvent('focus', newValue, e);
  });
  useEvent('onBlur', (e) => {
    const newValue = e.detail.value;
    focusRef.current = false;
    if (isControlled) {
      updateValue(props.value);
    }
    triggerEvent('blur', newValue, e);
  });
  useEvent('onConfirm', (e) => {
    const newValue = e.detail.value;
    triggerEvent('confirm', newValue, e);
  });
  return {
    inputValue: value,
  };
};

mountComponent<InputBlurProps>(InputBlur, {
  value: null,
  defaultValue: null,
  placeholder: null,
  placeholderClassName: '',
  placeholderStyle: '',
  enableNative: null,
  confirmType: null,
  confirmHold: null,
  alwaysSystem: null,
  selectionStart: null,
  selectionEnd: null,
  cursor: null,
  controlled: null,
  inputClassName: null,
  inputStyle: null,
  focus: null,
  password: null,
  disabled: null,
  name: null,
  type: null,
  randomNumber: null,
});

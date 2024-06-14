import { useEffect, useRef } from 'functional-mini/component';
import { mountComponent } from '../../_util/component';
import { useComponentEvent } from '../../_util/hooks/useComponentEvent';
import { useHandleCustomEvent } from '../../_util/hooks/useHandleCustomEvent';
import { useFormItem } from '../use-form-item';
import { FormInputFunctionalProps, FormInputProps } from './props';

interface InputRef {
  update(value: string);
}

const FormInput = (props: FormInputProps) => {
  const { formData, emit } = useFormItem(props);
  const { triggerEvent } = useComponentEvent(props);
  const inputRef = useRef<InputRef>();

  useHandleCustomEvent('handleRef', (input: InputRef) => {
    inputRef.current = input;
  });

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.update(formData.value);
    }
  }, [formData]);

  useHandleCustomEvent<string>('onChange', (value, e) => {
    emit('onChange', value);
    triggerEvent('change', value, e);
  });

  useHandleCustomEvent('onBlur', (value, e) => {
    triggerEvent('blur', value, e);
  });

  useHandleCustomEvent('onFocus', (value, e) => {
    triggerEvent('focus', value, e);
  });

  useHandleCustomEvent('onConfirm', (value, e) => {
    triggerEvent('confirm', value, e);
  });

  return {
    formData,
  };
};

mountComponent(FormInput, FormInputFunctionalProps);

import { useHandleCustomEvent } from 'compiled-alipay/_util/hooks/useHandleCustomEvent';
import { useEffect, useEvent, useRef } from 'functional-mini/component';
import { mountComponent } from '../../_util/component';
import { useComponentEvent } from '../../_util/hooks/useComponentEvent';
import { useFormItem } from '../use-form-item';
import { FormTextareaDefaultProps, FormTextareaProps } from './props';

const FormTextarea = (props: FormTextareaProps) => {
  const { formData, emit } = useFormItem(props);
  const { triggerEvent } = useComponentEvent(props);
  const inputRef = useRef();

  useHandleCustomEvent('handleRef', (input) => {
    inputRef.current = input;
  });

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.update(formData.value);
    }
  }, [formData]);

  useHandleCustomEvent('onChange', (value, e) => {
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

mountComponent(FormTextarea, FormTextareaDefaultProps as FormTextareaProps);

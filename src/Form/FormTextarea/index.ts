import { useEffect, useEvent, useRef } from 'functional-mini/component';
import { mountComponent } from '../../_util/component';
import { useComponentEvent } from '../../_util/hooks/useComponentEvent';
import { useFormItem } from '../use-form-item';
import { FormTextareaDefaultProps, FormTextareaProps } from './props';

const FormTextarea = (props: FormTextareaProps) => {
  const { formData, emit } = useFormItem(props);
  const { triggerEvent } = useComponentEvent(props);
  const inputRef = useRef();
  useEvent('handleRef', (input) => {
    inputRef.current = input;
  });

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.update(formData.value);
    }
  }, [formData]);

  useEvent('onChange', (value, e) => {
    emit('onChange', value);
    triggerEvent('change', value, e);
  });

  useEvent('onBlur', (value, e) => {
    triggerEvent('blur', value, e);
  });

  useEvent('onFocus', (value, e) => {
    triggerEvent('focus', value, e);
  });

  useEvent('onConfirm', (value, e) => {
    triggerEvent('confirm', value, e);
  });

  useEvent('onClear', (value, e) => {
    emit('onChange', '');
    triggerEvent('change', value, e);
  });

  return {
    formData,
  };
};

mountComponent(FormTextarea, FormTextareaDefaultProps as FormTextareaProps);

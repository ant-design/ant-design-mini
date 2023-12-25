import { useEvent } from 'functional-mini/component';
import { mountComponent } from '../../_util/component';
import { useComponentEvent } from '../../_util/hooks/useComponentEvent';
import { useFormItem } from '../use-form-item';
import { FormStepperDefaultProps, FormStepperProps } from './props';

const FormStepper = (props: FormStepperProps) => {
  const { formData, emit } = useFormItem(props);
  const { triggerEvent, triggerEventOnly } = useComponentEvent(props);

  useEvent('onChange', (value, e) => {
    emit('onChange', value);
    triggerEvent('change', value, e);
  });

  useEvent('onBlur', (e) => {
    triggerEventOnly('blur', e);
  });

  useEvent('onFocus', (e) => {
    triggerEventOnly('focus', e);
  });

  useEvent('onConfirm', (value, e) => {
    triggerEvent('confirm', value, e);
  });

  return {
    formData,
  };
};

mountComponent(FormStepper, FormStepperDefaultProps as FormStepperProps);

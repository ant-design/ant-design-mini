import { mountComponent } from '../../_util/component';
import { useComponentEvent } from '../../_util/hooks/useComponentEvent';
import {
  useHandleCustomEvent,
  useHandleCustomEventOnly,
} from '../../_util/hooks/useHandleCustomEvent';
import { useFormItem } from '../use-form-item';
import { FormStepperDefaultProps, FormStepperProps } from './props';

const FormStepper = (props: FormStepperProps) => {
  const { formData, emit } = useFormItem(props);
  const { triggerEvent, triggerEventOnly } = useComponentEvent(props);

  useHandleCustomEvent('onChange', (value, e) => {
    emit('onChange', value);
    triggerEvent('change', value, e);
  });

  useHandleCustomEventOnly('onBlur', (e) => {
    triggerEventOnly('blur', e);
  });

  useHandleCustomEventOnly('onFocus', (e) => {
    triggerEventOnly('focus', e);
  });

  useHandleCustomEvent('onConfirm', (value, e) => {
    triggerEvent('confirm', value, e);
  });

  return {
    formData,
  };
};

mountComponent(FormStepper, FormStepperDefaultProps);

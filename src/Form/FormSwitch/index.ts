import { useHandleCustomEvent } from 'compiled-alipay/_util/hooks/useHandleCustomEvent';
import { mountComponent } from '../../_util/component';
import { useComponentEvent } from '../../_util/hooks/useComponentEvent';
import { useFormItem } from '../use-form-item';
import { FormSwitchDefaultProps, FormSwitchProps } from './props';

const FormSwitch = (props: FormSwitchProps) => {
  const { formData, emit } = useFormItem(props);
  const { triggerEvent } = useComponentEvent(props);

  useHandleCustomEvent('onChange', (value, e) => {
    emit('onChange', value);
    triggerEvent('change', value, e);
  });

  return {
    formData,
  };
};

mountComponent(FormSwitch, FormSwitchDefaultProps as FormSwitchProps);

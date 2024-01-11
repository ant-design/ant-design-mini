import { mountComponent } from '../../_util/component';
import { useComponentEvent } from '../../_util/hooks/useComponentEvent';
import { useHandleCustomEvent } from '../../_util/hooks/useHandleCustomEvent';
import { useFormItem } from '../use-form-item';
import { FormCheckboxGroupDefaultProps, FormCheckboxGroupProps } from './props';

const FormCheckboxGroup = (props: FormCheckboxGroupProps) => {
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

mountComponent(FormCheckboxGroup, FormCheckboxGroupDefaultProps);

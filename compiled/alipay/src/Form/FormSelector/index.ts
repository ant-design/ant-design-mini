import { useMultipleValueHandleCustomEvent } from '../../_util/hooks/useHandleCustomEvent';
import { mountComponent } from '../../_util/component';
import { useComponentEvent } from '../../_util/hooks/useComponentEvent';
import { useFormItem } from '../use-form-item';
import { FormSelectorDefaultProps, FormSelectorProps } from './props';

const FormSelector = (props: FormSelectorProps) => {
  const { formData, emit } = useFormItem(props);

  const { triggerEventValues } = useComponentEvent(props);

  useMultipleValueHandleCustomEvent('onChange', (value, item, e) => {
    emit('onChange', value);
    triggerEventValues('change', [value, item], e);
  });

  useMultipleValueHandleCustomEvent('onSelectMax', (value, item, e) => {
    triggerEventValues('selectMax', [value, item], e);
  });

  useMultipleValueHandleCustomEvent('onSelectMin', (value, item, e) => {
    triggerEventValues('selectMin', [value, item], e);
  });

  return {
    formData,
  };
};

mountComponent(FormSelector, FormSelectorDefaultProps);

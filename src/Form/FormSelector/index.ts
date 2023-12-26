import { useEvent } from 'functional-mini/component';
import { mountComponent } from '../../_util/component';
import { useComponentEvent } from '../../_util/hooks/useComponentEvent';
import { useFormItem } from '../use-form-item';
import { FormSelectorDefaultProps, FormSelectorProps } from './props';

const FormSelector = (props: FormSelectorProps) => {
  const { formData, emit } = useFormItem(props);

  const { triggerEventValues } = useComponentEvent(props);
  useEvent('onChange', (value, item, e) => {
    emit('onChange', value);
    triggerEventValues('change', [value, item], e);
  });

  useEvent('onSelectMax', (value, item, e) => {
    triggerEventValues('selectMax', [value, item], e);
  });

  useEvent('onSelectMin', (value, item, e) => {
    triggerEventValues('selectMin', [value, item], e);
  });

  return {
    formData,
  };
};

mountComponent(FormSelector, FormSelectorDefaultProps as FormSelectorProps);

import { FormPickerDefaultProps, FormPickerProps } from './props';
import { useEvent } from 'functional-mini/component';
import { mountComponent } from '../../_util/component';
import { useComponentEvent } from '../../_util/hooks/useComponentEvent';
import { useFormItem } from '../use-form-item';

const FormPicker = (props: FormPickerProps) => {
  const { formData, emit } = useFormItem(props);
  const { triggerEventValues, triggerEventOnly, triggerEvent } =
    useComponentEvent(props);

  useEvent('onOk', (value, column, e) => {
    emit('onChange', value);
    triggerEventValues('ok', [value, column], e);
  });

  useEvent('onChange', (value, column, e) => {
    triggerEventValues('change', [value, column], e);
  });

  useEvent('onVisibleChange', (visible, e) => {
    triggerEvent('visibleChange', visible, e);
  });

  useEvent('onFormat', (value, column) => {
    if (props.onFormat) {
      return props.onFormat(value, column);
    }
  });

  useEvent('onDismissPicker', (e) => {
    triggerEventOnly('cancel', e);
  });

  return {
    formData,
  };
};

mountComponent(FormPicker, FormPickerDefaultProps as FormPickerProps);

import { useEvent } from 'functional-mini/component';
import { mountComponent } from '../../_util/component';
import { useComponentEvent } from '../../_util/hooks/useComponentEvent';
import { useMultipleValueHandleCustomEvent } from '../../_util/hooks/useHandleCustomEvent';
import { useFormItem } from '../use-form-item';
import { FormPickerDefaultProps, FormPickerProps } from './props';

const FormPicker = (props: FormPickerProps) => {
  const { formData, emit } = useFormItem(props);
  const { triggerEventValues, triggerEventOnly, triggerEvent } =
    useComponentEvent(props);

  useMultipleValueHandleCustomEvent('onOk', (value, column, e) => {
    emit('onChange', value);
    triggerEventValues('ok', [value, column], e);
  });

  useMultipleValueHandleCustomEvent('onChange', (value, column, e) => {
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

import { FormRangePickerDefaultProps, FormRangePickerProps } from './props';
import { useEvent } from 'functional-mini/component';
import { mountComponent } from '../../_util/component';
import { useComponentEvent } from '../../_util/hooks/useComponentEvent';
import { useFormItem } from '../use-form-item';

const FormDatePicker = (props: FormRangePickerProps) => {
  const { formData, emit } = useFormItem(props);
  const { triggerEventValues, triggerEventOnly, triggerEvent } =
    useComponentEvent(props);

  useEvent('onOk', (date, dateStr, e) => {
    emit('onChange', date);
    triggerEventValues('ok', [date, dateStr], e);
  });

  useEvent('onPickerChange', (type, date, dateStr, e) => {
    triggerEventValues('pickerChange', [type, date, dateStr], e);
  });

  useEvent('onVisibleChange', (visible, e) => {
    triggerEvent('visibleChange', visible, e);
  });

  useEvent('onDismissPicker', (e) => {
    triggerEventOnly('dismissPicker', e);
  });

  useEvent('onFormat', (date, dateStr) => {
    if (props.onFormat) {
      return props.onFormat(date, dateStr);
    }
  });

  useEvent('onFormatLabel', (type, value) => {
    if (props.onFormatLabel) {
      return props.onFormatLabel(type, value);
    }
  });
  return {
    formData,
  };
};

mountComponent(
  FormDatePicker,
  FormRangePickerDefaultProps as FormRangePickerProps
);

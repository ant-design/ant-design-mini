import { useEvent } from 'functional-mini/component';
import { mountComponent } from '../../_util/component';
import { useComponentEvent } from '../../_util/hooks/useComponentEvent';
import { useFormItem } from '../use-form-item';
import {
  FormCascaderPickerProps,
  FormCascaderPickerDefaultProps,
} from './props';

const FormCascaderPicker = (props: FormCascaderPickerProps) => {
  const { formData, emit } = useFormItem(props);
  const { triggerEventValues, triggerEventOnly, triggerEvent } =
    useComponentEvent(props);

  useEvent('onOk', (value, option, e) => {
    emit('onChange', value);
    triggerEventValues('ok', [value, option], e);
  });

  useEvent('onPickerChange', (value, option, e) => {
    triggerEventValues('pickerChange', [value, option], e);
  });

  useEvent('onVisibleChange', (visible, e) => {
    triggerEvent('visibleChange', visible, e);
  });

  useEvent('onFormat', (value, option) => {
    if (props.onFormat) {
      return props.onFormat(value, option);
    }
  });

  useEvent('onDismissPicker', (e) => {
    triggerEventOnly('cancel', e);
  });

  useEvent('onChange', (value, options, e) => {
    triggerEventValues('change', [value, options], e);
  });

  return {
    formData,
  };
};

mountComponent(
  FormCascaderPicker,
  FormCascaderPickerDefaultProps as FormCascaderPickerProps
);

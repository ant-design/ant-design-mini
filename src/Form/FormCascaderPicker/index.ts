import {
  useHandleCustomEvent,
  useMultipleValueHandleCustomEvent,
} from 'compiled-alipay/_util/hooks/useHandleCustomEvent';
import { useEvent } from 'functional-mini/component';
import { mountComponent } from '../../_util/component';
import { useComponentEvent } from '../../_util/hooks/useComponentEvent';
import { useHandleCustomEventOnly } from '../../_util/hooks/useHandleCustomEvent';
import { useFormItem } from '../use-form-item';
import {
  FormCascaderPickerDefaultProps,
  FormCascaderPickerProps,
} from './props';

const FormCascaderPicker = (props: FormCascaderPickerProps) => {
  const { formData, emit } = useFormItem(props);
  const { triggerEventValues, triggerEventOnly, triggerEvent } =
    useComponentEvent(props);

  useMultipleValueHandleCustomEvent('onOk', (value, option, e) => {
    emit('onChange', value);
    triggerEventValues('ok', [value, option], e);
  });

  useMultipleValueHandleCustomEvent('onPickerChange', (value, option, e) => {
    triggerEventValues('pickerChange', [value, option], e);
  });

  useHandleCustomEvent('onVisibleChange', (visible, e) => {
    triggerEvent('visibleChange', visible, e);
  });

  useEvent<any[]>('onFormat', (value, option) => {
    if (props.onFormat) {
      return props.onFormat(value, option);
    }
  });

  useHandleCustomEventOnly('onDismissPicker', (e) => {
    triggerEventOnly('cancel', e);
  });

  useMultipleValueHandleCustomEvent('onChange', (value, options, e) => {
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

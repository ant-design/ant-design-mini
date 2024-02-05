import { useEvent } from 'functional-mini/component';
import { mountComponent } from '../../_util/component';
import { useComponentEvent } from '../../_util/hooks/useComponentEvent';
import {
  useHandleCustomEvent,
  useHandleCustomEventOnly,
  useMultipleValueHandleCustomEvent,
} from '../../_util/hooks/useHandleCustomEvent';
import { useFormItem } from '../use-form-item';
import { FormDatePickerDefaultProps, FormDatePickerProps } from './props';
import { platform } from '../../_util/platform';

const FormDatePicker = (props: FormDatePickerProps) => {
  const { formData, emit } = useFormItem(props);
  const { triggerEventValues, triggerEventOnly, triggerEvent } =
    useComponentEvent(props);

  useMultipleValueHandleCustomEvent('onOk', (date, dateStr, e) => {
    emit('onChange', platform() === 'wechat' ? date.getTime() : date);
    triggerEventValues('ok', [date, dateStr], e);
  });

  useMultipleValueHandleCustomEvent('onPickerChange', (date, dateStr, e) => {
    triggerEventValues('pickerChange', [date, dateStr], e);
  });

  useHandleCustomEvent('onVisibleChange', (visible, e) => {
    triggerEvent('visibleChange', visible, e);
  });

  useHandleCustomEventOnly('onDismissPicker', (e) => {
    triggerEventOnly('dismissPicker', e);
  });

  useEvent(
    'handleFormat',
    (date, dateStr) => {
      if (props.onFormat) {
        return props.onFormat(date, dateStr);
      }
    },
    {
      handleResult: true,
    }
  );

  useEvent(
    'handleFormatLabel',
    (type, value) => {
      if (props.onFormatLabel) {
        return props.onFormatLabel(type, value);
      }
    },
    {
      handleResult: true,
    }
  );

  return {
    formData,
  };
};

mountComponent(
  FormDatePicker,
  FormDatePickerDefaultProps as FormDatePickerProps
);

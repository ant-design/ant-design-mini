import { useEvent } from 'functional-mini/component';
import { mountComponent } from '../../_util/component';
import { useComponentEvent } from '../../_util/hooks/useComponentEvent';
import {
  useHandleCustomEvent,
  useHandleCustomEventOnly,
  useMultipleValueHandleCustomEvent,
} from '../../_util/hooks/useHandleCustomEvent';
import { platform } from '../../_util/platform';
import { useFormItem } from '../use-form-item';
import { FormRangePickerDefaultProps, FormRangePickerProps } from './props';

const FormDatePicker = (props: FormRangePickerProps) => {
  const { formData, emit } = useFormItem(props);
  const { triggerEventValues, triggerEventOnly, triggerEvent } =
    useComponentEvent(props);

  useMultipleValueHandleCustomEvent('onOk', (date, dateStr, e) => {
    emit(
      'onChange',
      date.map((o: Date) => {
        if (platform() === 'wechat') {
          return o.getTime();
        }
        return o;
      })
    );
    triggerEventValues('ok', [date, dateStr], e);
  });

  useMultipleValueHandleCustomEvent(
    'onPickerChange',
    (type, date, dateStr, e) => {
      triggerEventValues('pickerChange', [type, date, dateStr], e);
    }
  );

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
  FormRangePickerDefaultProps as FormRangePickerProps
);

import {
  Component,
  triggerEvent,
  triggerEventValues,
  triggerEventOnly,
  getValueFromProps,
} from '../../_util/simply';
import { resolveEventValue, resolveEventValues } from '../../_util/platform';
import { FormCascaderPickerDefaultProps } from './props';
import { createForm } from '../form';

Component(
  FormCascaderPickerDefaultProps,
  {
    onOk(value, option, e) {
      const v = resolveEventValues(value, option);
      this.emit('onChange', v[0]);
      triggerEventValues(this, 'ok', v, e);
    },
    onPickerChange(value, option, e) {
      triggerEventValues(
        this,
        'pickerChange',
        resolveEventValues(value, option),
        e
      );
    },
    onVisibleChange(visible, e) {
      triggerEvent(this, 'visibleChange', resolveEventValue(visible), e);
    },
    onDismissPicker(e) {
      triggerEventOnly(this, 'cancel', e);
    },
    onChange(value, options, e) {
      triggerEventValues(this, 'change', resolveEventValues(value, options), e);
    },
    handleFormat(value, option) {
      const onFormat = getValueFromProps(this, 'onFormat');
      if (onFormat) {
        return onFormat(value, option);
      }
    },
  },
  {},
  [createForm()],
  {
  }
);

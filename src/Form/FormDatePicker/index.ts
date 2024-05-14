import {
  Component,
  triggerEvent,
  triggerEventValues,
  triggerEventOnly,
  getValueFromProps,
} from '../../_util/simply';
import { resolveEventValue, resolveEventValues } from '../../_util/platform';
import { FormDatePickerDefaultProps } from './props';
import { createForm } from '../form';

Component(
  FormDatePickerDefaultProps,
  {
    onOk(date, dateStr, e) {
      const v = resolveEventValues(date, dateStr);
      this.emit('onChange', v[0]);
      triggerEventValues(this, 'ok', v, e);
    },
    onPickerChange(date, dateStr, e) {
      triggerEventValues(
        this,
        'pickerChange',
        resolveEventValues(date, dateStr),
        e
      );
    },
    onVisibleChange(visible, e) {
      triggerEvent(this, 'visibleChange', resolveEventValue(visible), e);
    },
    onDismissPicker(e) {
      triggerEventOnly(this, 'dismissPicker', e);
    },

    handleFormat(date, dateStr) {
      const onFormat = getValueFromProps(this, 'onFormat');
      if (onFormat) {
        return onFormat(date, dateStr);
      }
    },
    handleFormatLabel(type, value) {
      const onFormatLabel = getValueFromProps(this, 'onFormatLabel');
      if (onFormatLabel) {
        return onFormatLabel(type, value);
      }
    },
  },
  {},
  [createForm()],
  {
    /// #if WECHAT
    attached() {
      this.setData({
        handleFormat: this.handleFormat.bind(this),
        handleFormatLabel: this.handleFormatLabel.bind(this),
      });
    },
    /// #endif
  }
);

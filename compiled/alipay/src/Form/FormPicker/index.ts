import {
  Component,
  triggerEvent,
  triggerEventValues,
  triggerEventOnly,
  getValueFromProps,
} from '../../_util/simply';
import { resolveEventValue, resolveEventValues } from '../../_util/platform';
import { FormPickerDefaultProps } from './props';
import { createForm } from '../form';

Component(
  FormPickerDefaultProps,
  {
    onOk(value, column, e) {
      const v = resolveEventValues(value, column);
      this.emit('onChange', v[0]);
      triggerEventValues(this, 'ok', v, e);
    },
    onChange(value, column, e) {
      triggerEventValues(this, 'change', resolveEventValues(value, column), e);
    },
    onVisibleChange(visible, e) {
      triggerEvent(this, 'visibleChange', resolveEventValue(visible), e);
    },
    onDismissPicker(e) {
      triggerEventOnly(this, 'cancel', e);
    },

    handleFormat(value, column) {
      const onFormat = getValueFromProps(this, 'onFormat');
      if (onFormat) {
        return onFormat(value, column);
      }
    },
  },
  {},
  [createForm()],
  {
  }
);

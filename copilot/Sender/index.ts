// @ts-nocheck
import {
  Component,
  getValueFromProps,
  triggerEvent,
  triggerEventOnly,
} from '../_util/simply';
import { SenderProps } from './props';

Component(
  SenderProps,
  {
    handleMainBtn() {
      const [loading] = getValueFromProps(this, ['loading']);
      if (loading) {
        this.handleCancel();
      } else {
        this.handleSubmit();
      }
    },
    handleConfirm() {
      const [value] = getValueFromProps(this, ['value']);
      triggerEvent(this, 'confirm', value);
    },
    handleSubmit() {
      const [value] = getValueFromProps(this, ['value']);
      triggerEvent(this, 'submit', value);
    },
    handleCancel() {
      triggerEventOnly(this, 'cancel');
    },
    handleInput(e) {
      triggerEvent(this, 'change', e.detail.value);
    },
    handleFocus() {
      triggerEvent(this, 'focus');
    },
    handleBlur() {
      triggerEvent(this, 'blur');
    },
  },
  {},
  [],
  {
    multipleSlots: true,
  }
);

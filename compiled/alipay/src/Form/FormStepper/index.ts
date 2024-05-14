import { Component, triggerEvent, triggerEventOnly } from '../../_util/simply';
import { resolveEventValue } from '../../_util/platform';
import { FormStepperDefaultProps } from './props';
import { createForm } from '../form';

Component(
  FormStepperDefaultProps,
  {
    onChange(value, e) {
      this.emit('onChange', resolveEventValue(value));
      triggerEvent(this, 'change', resolveEventValue(value), e);
    },
    onBlur(e) {
      triggerEventOnly(this, 'blur', e);
    },
    onFocus(e) {
      triggerEventOnly(this, 'focus', e);
    },
    onConfirm(value, e) {
      triggerEvent(this, 'confirm', resolveEventValue(value), e);
    },
  },
  null,
  [createForm()]
);

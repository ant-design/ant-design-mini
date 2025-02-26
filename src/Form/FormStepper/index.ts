import { resolveEventValue } from '../../_util/platform';
import { Component, triggerEvent, triggerEventOnly } from '../../_util/simply';
import { createForm } from '../form';
import { FormStepperDefaultProps } from './props';

Component({
  props: FormStepperDefaultProps,
  methods: {
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
  mixins: [createForm()],
});

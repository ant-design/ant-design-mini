import { resolveEventValue } from '../../_util/platform';
import { Component, triggerEvent } from '../../_util/simply';
import { createForm } from '../form';
import { FormRadioGroupDefaultProps } from './props';

Component({
  props: FormRadioGroupDefaultProps,
  methods: {
    onChange(value, e) {
      this.emit('onChange', resolveEventValue(value));
      triggerEvent(this, 'change', resolveEventValue(value), e);
    },
  },
  mixins: [createForm()],
});

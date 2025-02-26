import { resolveEventValue } from '../../_util/platform';
import { Component, triggerEvent } from '../../_util/simply';
import { createForm } from '../form';
import { FormSwitchDefaultProps } from './props';

Component({
  props: FormSwitchDefaultProps,
  methods: {
    onChange(value, e) {
      this.emit('onChange', resolveEventValue(value));
      triggerEvent(this, 'change', resolveEventValue(value), e);
    },
  },
  mixins: [createForm()],
});

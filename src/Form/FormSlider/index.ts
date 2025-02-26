import { resolveEventValue } from '../../_util/platform';
import { Component, triggerEvent } from '../../_util/simply';
import { createForm } from '../form';
import { FormSliderDefaultProps } from './props';

Component({
  props: FormSliderDefaultProps,
  methods: {
    onChange(value, e) {
      this.emit('onChange', resolveEventValue(value));
      triggerEvent(this, 'change', resolveEventValue(value), e);
    },
    onAfterChange(value, e) {
      triggerEvent(this, 'afterChange', resolveEventValue(value), e);
    },
  },
  mixins: [createForm()],
});

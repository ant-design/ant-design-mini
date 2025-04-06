import mixinValue from '../../mixins/value';
import { Component, triggerEvent } from '../../_util/simply';
import { RadioGroupDefaultProps } from './props';

Component({
  props: RadioGroupDefaultProps,
  methods: {
    onChange(e) {
      const value = e.detail.value;
      if (!this.isControlled()) {
        this.update(value);
      }
      triggerEvent(this, 'change', value, e);
    },
  },
  mixins: [mixinValue()],
});

import mixinValue from '../mixins/value';
import { Component, triggerEvent } from '../_util/simply';
import { CheckboxDefaultProps } from './props';

Component({
  props: CheckboxDefaultProps,
  methods: {
    onChange(e) {
      const value = !this.getValue();
      if (!this.isControlled()) {
        this.update(value);
      }
      triggerEvent(this, 'change', value, e);
    },
  },
  mixins: [
    mixinValue({
      valueKey: 'checked',
      defaultValueKey: 'defaultChecked',
    }),
  ],
});

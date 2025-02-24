import mixinValue from '../mixins/value';
import { Component, triggerEvent } from '../_util/simply';
import { SwitchDefaultProps } from './props';

Component({
  props: SwitchDefaultProps,
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

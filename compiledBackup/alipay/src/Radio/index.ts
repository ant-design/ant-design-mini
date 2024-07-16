import { Component, triggerEvent } from '../_util/simply';
import { RadioDefaultProps } from './props';
import mixinValue from '../mixins/value';

Component(
  RadioDefaultProps,
  {
    onChange(e) {
      const value = e.detail.value;
      if (!this.isControlled()) {
        this.update(value);
      }
      triggerEvent(this, 'change', value, e);
    },
  },
  null,
  [
    mixinValue({
      valueKey: 'checked',
      defaultValueKey: 'defaultChecked',
    }),
  ]
);

import { Component, triggerEvent } from '../../_util/simply';
import { RadioGroupDefaultProps } from './props';
import mixinValue from '../../mixins/value';

Component(
  RadioGroupDefaultProps,
  {
    onChange(_, e) {
      const index = e.currentTarget.dataset.index;
      const value = this.props.options[index].value;
      if (!this.isControlled()) {
        this.update(value);
      }
      triggerEvent(this, 'change', value, e);
    },
  },
  null,
  [mixinValue()]
);

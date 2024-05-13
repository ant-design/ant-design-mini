import { Component, triggerEvent, getValueFromProps } from '../../_util/simply';
import { RadioGroupDefaultProps } from './props';
import mixinValue from '../../mixins/value';

Component(
  RadioGroupDefaultProps,
  {
    onChange(_, e) {
      let event;
      event = e;
      const index = event.currentTarget.dataset.index;
      const options = getValueFromProps(this, 'options');
      const value = options[index].value;
      if (!this.isControlled()) {
        this.update(value);
      }
      triggerEvent(this, 'change', value, event);
    },
  },
  null,
  [mixinValue()]
);

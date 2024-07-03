import { TabBarDefaultProps } from './props';
import { Component, triggerEvent } from '../_util/simply';
import mixinValue from '../mixins/value';

Component(
  TabBarDefaultProps,
  {
    onChange(e) {
      const { index } = e.currentTarget.dataset;
      if (index === this.getValue()) {
        return;
      }
      if (!this.isControlled()) {
        this.update(index);
      }
      triggerEvent(this, 'change', index, e);
    },
  },
  null,
  [
    mixinValue({
      valueKey: 'current',
      defaultValueKey: 'defaultCurrent',
    }),
  ]
);

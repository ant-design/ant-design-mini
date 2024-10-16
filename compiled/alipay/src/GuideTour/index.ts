import { Component, triggerEvent, triggerEventOnly } from '../_util/simply';
import { GuideTourDefaultProps } from './props';
import mixinValue from '../mixins/value';

Component(
  GuideTourDefaultProps,
  {
    async onNext() {
      const currentValue = this.getValue();
      const newCurrent = currentValue + 1;
      if (!this.isControlled()) {
        this.update(newCurrent);
      }
      triggerEvent(this, 'change', newCurrent);
    },

    async onPrev() {
      const currentValue = this.getValue();
      const newCurrent = currentValue - 1;
      if (!this.isControlled()) {
        this.update(newCurrent);
      }
      triggerEvent(this, 'change', newCurrent);
    },

    onCancel() {
      triggerEventOnly(this, 'cancel');
    },

    async onSwiperChange(e) {
      const { current } = e.detail;
      if (!this.isControlled()) {
        this.update(current);
      }
      triggerEvent(this, 'change', current);
    },
  },
  undefined,
  [
    mixinValue({
      valueKey: 'current',
      defaultValueKey: 'defaultCurrent',
    }),
  ]
);

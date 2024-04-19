import {
  Component,
  triggerEventValues,
  triggerEventOnly,
} from '../_util/simply';
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
      triggerEventValues(this, 'change', [newCurrent]);
    },

    async onPrev() {
      const currentValue = this.getValue();
      const newCurrent = currentValue - 1;
      if (!this.isControlled()) {
        this.update(newCurrent);
      }
      triggerEventValues(this, 'change', [newCurrent]);
    },

    onCancel() {
      triggerEventOnly(this, 'cancel');
    },

    async onSwiperChange(e) {
      const { current } = e.detail;
      if (!this.isControlled()) {
        this.update(current);
      }
      triggerEventValues(this, 'change', [current]);
    },
  },
  [
    mixinValue({
      valueKey: 'current',
      defaultValueKey: 'defaultCurrent',
    }),
  ]
);

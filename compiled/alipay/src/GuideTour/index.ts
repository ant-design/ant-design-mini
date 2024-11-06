import { effect } from '@preact/signals-core';
import mixinValue from '../mixins/value';
import {
  ComponentWithSignalStoreImpl,
  triggerEvent,
  triggerEventOnly,
} from '../_util/simply';
import i18nController from '../_util/store';
import { GuideTourDefaultProps } from './props';

ComponentWithSignalStoreImpl(
  {
    store: () => i18nController,
    updateHook: effect,
    mapState: {
      locale: ({ store }) => store.currentLocale.value,
    },
  },
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

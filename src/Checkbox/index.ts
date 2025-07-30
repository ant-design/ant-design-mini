import mixinValue from '../mixins/value';
import { Component, triggerEvent } from '../_util/simply';
import { isAilpayNative } from '../_util/support';
import { CheckboxDefaultProps } from './props';

Component({
  data: {
    isLabelSupport: true,
  },
  props: CheckboxDefaultProps,
  onInit() {
    this.setData({
      isLabelSupport: !isAilpayNative(),
    });
  },
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

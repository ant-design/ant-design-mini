import mixinValue from '../mixins/value';
import {
  Component,
  getValueFromProps,
  triggerEventValues,
} from '../_util/simply';
import { ChecklistDefaultProps } from './props';

Component({
  props: ChecklistDefaultProps,
  methods: {
    onChange(item) {
      const [multiple, options] = getValueFromProps(this, [
        'multiple',
        'options',
      ]);
      let value;
      /// #if ALIPAY || ALIPAYNATIVE
      value = item.value;
      /// #endif
      /// #if WECHAT
      value = item.detail.value;
      /// #endif
      if (multiple) {
        let currentValue = this.getValue();
        if (currentValue.indexOf(value) > -1) {
          currentValue = currentValue.filter((v) => v !== value);
        } else {
          currentValue = [...currentValue, value];
        }
        if (!this.isControlled()) {
          this.update(currentValue);
        }
        triggerEventValues(this, 'change', [
          currentValue,
          options.filter((v) => currentValue.indexOf(v.value) > -1),
        ]);
      } else {
        if (!this.isControlled()) {
          this.update(value);
        }
        triggerEventValues(this, 'change', [
          value,
          options.find((v) => v.value === value),
        ]);
      }
    },
  },

  mixins: [
    mixinValue({
      transformValue(val) {
        const value = val || [];
        return {
          needUpdate: true,
          value,
        };
      },
    }),
  ],
});

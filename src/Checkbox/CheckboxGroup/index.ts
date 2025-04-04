import mixinValue from '../../mixins/value';
import { Component, getValueFromProps, triggerEvent } from '../../_util/simply';
import { CheckboxGroupDefaultProps } from './props';

Component({
  props: CheckboxGroupDefaultProps,
  methods: {
    onChange(args, e) {
      if (getValueFromProps(this, 'disabled')) {
        return;
      }
      let event;
      /// #if WECHAT
      event = args;
      /// #endif
      /// #if ALIPAY || BUNDLE2H
      event = e;
      /// #endif
      let currentValue = this.getValue();
      const { index } = event.currentTarget.dataset;
      const selectValue = getValueFromProps(this, 'options')[index].value;
      if (currentValue.indexOf(selectValue) > -1) {
        currentValue = currentValue.filter((v) => v !== selectValue);
      } else {
        currentValue = [...currentValue, selectValue];
      }
      if (!this.isControlled()) {
        this.update(currentValue);
      }
      triggerEvent(this, 'change', currentValue, e);
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

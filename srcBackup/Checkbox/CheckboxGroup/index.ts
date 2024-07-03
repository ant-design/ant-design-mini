import { Component, triggerEvent, getValueFromProps } from '../../_util/simply';
import { CheckboxGroupDefaultProps } from './props';
import mixinValue from '../../mixins/value';

Component(
  CheckboxGroupDefaultProps,
  {
    onChange(args, e) {
      if (getValueFromProps(this, 'disabled')) {
        return;
      }
      let event;
      /// #if WECHAT
      event = args;
      /// #endif
      /// #if ALIPAY
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
  null,
  [
    mixinValue({
      transformValue(val) {
        const value = val || [];
        return {
          needUpdate: true,
          value,
        };
      },
    }),
  ]
);

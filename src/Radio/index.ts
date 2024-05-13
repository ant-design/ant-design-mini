import { Component, triggerEvent } from '../_util/simply';
import { RadioDefaultProps } from './props';
import mixinValue from '../mixins/value';

Component(
  RadioDefaultProps,
  {
    /// #if ALIPAY
    onChange(e) {
      const value = e.detail.value;
      if (!this.isControlled()) {
        this.update(value);
      }
      triggerEvent(this, 'change', value, e);
    },
    /// #endif
    /// #if WECHAT
    handleTap(e) {
      // 只能从 false -> true
      if (this.getValue()) {
        return;
      }
      if (!this.isControlled()) {
        this.update(true);
      }
      triggerEvent(this, 'change', true, e);
    },

    /// #endif
  },
  null,
  [
    mixinValue({
      valueKey: 'checked',
      defaultValueKey: 'defaultChecked',
    }),
  ]
);

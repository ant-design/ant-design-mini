import mixinValue from '../mixins/value';
import { Component, triggerEvent } from '../_util/simply';
import { RadioDefaultProps } from './props';

Component({
  props: RadioDefaultProps,
  methods: {
    /// #if ALIPAY || BUNDLE2H
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
  mixins: [
    mixinValue({
      valueKey: 'checked',
      defaultValueKey: 'defaultChecked',
    }),
  ],
});

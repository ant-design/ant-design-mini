import mixinValue from '../../mixins/value';
import { Component, getValueFromProps, triggerEvent } from '../../_util/simply';
import { RadioGroupDefaultProps } from './props';

Component({
  props: RadioGroupDefaultProps,
  methods: {
    onChange(_, e) {
      let event;
      /// #if ALIPAY
      event = e;
      /// #endif
      /// #if WECHAT
      event = _;
      /// #endif
      const index = event.currentTarget.dataset.index;
      const options = getValueFromProps(this, 'options');
      const value = options[index].value;
      if (!this.isControlled()) {
        this.update(value);
      }
      triggerEvent(this, 'change', value, event);
    },
  },
  mixins: [mixinValue()],
});

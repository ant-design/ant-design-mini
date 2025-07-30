import { Component, getValueFromProps, triggerEvent } from '../_util/simply';
import { assertAilpayNativeNotSupport } from '../_util/support';
import { PostscriptProps } from './props';

assertAilpayNativeNotSupport('Postscript');

Component({
  props: PostscriptProps,
  data: {
    content: '',
  },
  methods: {
    checkMaxLength(value) {
      const maxLength = Number(getValueFromProps(this, 'maxLength') || -1);
      if (maxLength !== -1 && value.length > maxLength) {
        return value.slice(0, maxLength);
      }
      return value;
    },
    handleInput(val) {
      let value = val;
      /// #if WECHAT
      value = val.detail;
      /// #endif
      this.setData({ content: value });
      triggerEvent(this, 'change', value);
    },

    handleQuickInput(e) {
      const { value } = e.currentTarget.dataset;
      const combineSymbol = getValueFromProps(this, 'combineSymbol');
      const result = this.checkMaxLength(
        combineSymbol
          ? `${
              this.data.content ? `${this.data.content}${combineSymbol}` : ''
            }${value}`
          : value
      );
      this.setData({ content: result });
      triggerEvent(this, 'change', result);
    },
  },
});

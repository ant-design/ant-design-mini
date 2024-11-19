import { PostscriptProps } from './props';
import { Component, getValueFromProps, triggerEvent } from '../_util/simply';

Component(
  PostscriptProps,
  {
    checkMaxLength(value) {
      const maxLength = getValueFromProps(this, 'maxLength');
      if (value.length > maxLength) {
        return value.slice(0, maxLength);
      }
      return value;
    },
    handleInput(value) {
      const result = this.checkMaxLength(value);
      this.setData({ value: result });
      triggerEvent(this, 'change', result);
    },

    handleQuickInput(e) {
      const { value } = e.currentTarget.dataset;
      const combineSymbol = getValueFromProps(this, 'combineSymbol');
      const result = this.checkMaxLength(combineSymbol
        ? `${this.data.value? `${this.data.value}${combineSymbol}` : ''}${value}`
        : value);
      this.setData({ value: result });
      triggerEvent(this, 'change', result);
    }
  },
  {
    value: ''
  }
);

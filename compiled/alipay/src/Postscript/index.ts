import { PostscriptProps } from './props';
import { Component, getValueFromProps, triggerEvent } from '../_util/simply';

Component(
  PostscriptProps,
  {
    checkMaxLength(value) {
      const maxLength = Number(getValueFromProps(this, 'maxLength'));
      if (value.length > maxLength) {
        return value.slice(0, maxLength);
      }
      return value;
    },
    handleInput(value) {
      this.setData({ content: value });
      triggerEvent(this, 'change', value);
    },

    handleQuickInput(e) {
      const { value } = e.currentTarget.dataset;
      const combineSymbol = getValueFromProps(this, 'combineSymbol');
      const result = this.checkMaxLength(combineSymbol
        ? `${this.data.content? `${this.data.content}${combineSymbol}` : ''}${value}`
        : value);
      this.setData({ content: result });
      triggerEvent(this, 'change', result);
    }
  },
  {
    content: ''
  }
);

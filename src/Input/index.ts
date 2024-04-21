import { Component, triggerEventValues } from '../_util/simply';
import { InputFunctionalProps } from './props';
import mixinValue from '../mixins/value';

Component(
  InputFunctionalProps,
  {
    onChange(e) {
      const value = e.detail.value;
      if (!this.isControlled()) {
        this.update(value);
      }
      triggerEventValues(this, 'change', [value], e);
    },
    onFocus(e) {
      const value = e.detail.value;
      this.setData({
        selfFocus: true,
      });
      triggerEventValues(this, 'focus', [value], e);
    },
    onBlur(e) {
      const value = e.detail.value;
      this.setData({
        selfFocus: false,
      });
      triggerEventValues(this, 'blur', [value], e);
    },
    onConfirm(e) {
      const value = e.detail.value;
      triggerEventValues(this, 'confirm', [value], e);
    },
    onClear(e) {
      if (!this.isControlled()) {
        this.update('');
      }
      triggerEventValues(this, 'change', [''], e);
    },
  },
  [mixinValue({ scopeKey: 'state' })],
  {
    selfFocus: false,
  },
  /// #if WECHAT
  {
    attached() {
      this.triggerEvent('ref', this);
    },
  }
  /// #endif
);

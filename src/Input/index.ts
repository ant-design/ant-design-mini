import { effect } from '@preact/signals-core';
import mixinValue from '../mixins/value';
import {
  ComponentWithSignalStoreImpl,
  getValueFromProps,
  triggerEvent,
} from '../_util/simply';
import i18nController from '../_util/store';
import { InputDefaultProps } from './props';
import { formatNumberWithLimits, isNumber } from './utils';

ComponentWithSignalStoreImpl(
  {
    store: () => i18nController,
    updateHook: effect,
    mapState: {
      locale: ({ store }) => store.currentLocale.value,
    },
  },
  InputDefaultProps,
  {
    onChange(e) {
      const value = e.detail.value;
      if (!this.isControlled()) {
        this.update(value);
      }
      triggerEvent(this, 'change', value, e);
    },
    onFocus(e) {
      const value = e.detail.value;
      this.setData({
        selfFocus: true,
      });
      triggerEvent(this, 'focus', value, e);
    },
    onBlur(e) {
      let value = e.detail.value;
      this.setData({
        selfFocus: false,
      });
      const val = this.checkNumberValue(value);
      if (val !== null) {
        if (val !== value && !this.isControlled()) {
          this.update(val);
        }
        value = val;
      }
      console.log('onBlur',value);
      triggerEvent(this, 'blur', value, e);
    },
    onConfirm(e) {
      const value = e.detail.value;
      triggerEvent(this, 'confirm', value, e);
    },
    onClear(e) {
      if (!this.isControlled()) {
        this.update('');
      }
      triggerEvent(this, 'change', '', e);
    },
    checkNumberValue(value) {
      const [type, max, min, precision] = getValueFromProps(this, [
        'type',
        'max',
        'min',
        'precision',
      ]);
      const NUMBER_KEYBOARD = ['number', 'digit', 'numberpad', 'digitpad'];
      if (NUMBER_KEYBOARD.indexOf(type) !== -1 && isNumber(value)) {
        return formatNumberWithLimits(value, max, min, precision);
      }
      return null;
    },
  },
  {
    selfFocus: false,
  },
  [mixinValue({ scopeKey: 'state' })],
  /// #if WECHAT
  {
    attached() {
      this.triggerEvent('ref', this);
    },
  }
  /// #endif
);

import { effect } from '@preact/signals-core';
import mixinValue from '../../mixins/value';
import { ComponentWithSignalStoreImpl, triggerEvent } from '../../_util/simply';
import i18nController from '../../_util/store';
import { TextareaDefaultProps } from './props';

ComponentWithSignalStoreImpl(
  {
    store: () => i18nController,
    updateHook: effect,
    mapState: {
      locale: ({ store }) => store.currentLocale.value,
    },
  },
  TextareaDefaultProps,
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
      const value = e.detail.value;
      this.setData({
        selfFocus: false,
      });
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

import { effect } from '@preact/signals-core';
import mixinValue from '../../mixins/value';
import { ComponentWithSignalStoreImpl, triggerEvent } from '../../_util/simply';
import i18nController from '../../_util/store';

ComponentWithSignalStoreImpl(
  {
    store: () => i18nController,
    updateHook: effect,
    mapState: {
      locale: ({ store }) => store.currentLocale.value,
    },
  },
  {
    onChange(e) {
      const value = e.detail.value;
      if (this.isControlled()) {
        this.update(value, {}, true);
      }
      triggerEvent(this, 'change', value, e);
    },
    onFocus(e) {
      const value = e.detail.value;
      this.focus = true;
      triggerEvent(this, 'focus', value, e);
    },
    onBlur(e) {
      const value = e.detail.value;
      this.focus = false;
      if (this.isControlled()) {
        this.update(this.props.value);
      }
      triggerEvent(this, 'blur', value, e);
    },
    onConfirm(e) {
      const value = e.detail.value;
      triggerEvent(this, 'confirm', value, e);
    },
  },
  undefined,
  [
    mixinValue({
      scopeKey: 'state',
      transformValue(value, extra, updateWithoutFocusCheck) {
        if (value === null || (!updateWithoutFocusCheck && this.focus)) {
          return {
            needUpdate: false,
          };
        }
        return {
          needUpdate: true,
          value,
        };
      },
    }),
  ],
  {
    focus: false,
  }
);

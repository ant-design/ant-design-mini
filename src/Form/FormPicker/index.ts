import { effect } from '@preact/signals-core';
import { resolveEventValue, resolveEventValues } from '../../_util/platform';
import {
  ComponentWithSignalStoreImpl,
  getValueFromProps,
  triggerEvent,
  triggerEventOnly,
  triggerEventValues,
} from '../../_util/simply';
import i18nController from '../../_util/store';
import { createForm } from '../form';
import { FormPickerDefaultProps } from './props';

ComponentWithSignalStoreImpl(
  {
    store: () => i18nController,
    updateHook: effect,
    mapState: {
      locale: ({ store }) => store.currentLocale.value,
    },
  },
  FormPickerDefaultProps,
  {
    onOk(value, column, e) {
      const v = resolveEventValues(value, column);
      this.emit('onChange', v[0]);
      triggerEventValues(this, 'ok', v, e);
    },
    onChange(value, column, e) {
      triggerEventValues(this, 'change', resolveEventValues(value, column), e);
    },
    onVisibleChange(visible, e) {
      triggerEvent(this, 'visibleChange', resolveEventValue(visible), e);
    },
    onDismissPicker(e) {
      triggerEventOnly(this, 'cancel', e);
    },

    handleFormat(value, column) {
      const onFormat = getValueFromProps(this, 'onFormat');
      if (onFormat) {
        return onFormat(value, column);
      }
    },
  },
  {},
  [createForm()],
  {
    /// #if WECHAT
    attached() {
      this.setData({
        handleFormat: this.handleFormat.bind(this),
      });
    },
    /// #endif
  }
);

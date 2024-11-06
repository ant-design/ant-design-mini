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
import { FormCascaderPickerDefaultProps } from './props';

ComponentWithSignalStoreImpl(
  {
    store: () => i18nController,
    updateHook: effect,
    mapState: {
      locale: ({ store }) => store.currentLocale.value,
    },
  },
  FormCascaderPickerDefaultProps,
  {
    onOk(value, option, e) {
      const v = resolveEventValues(value, option);
      this.emit('onChange', v[0]);
      triggerEventValues(this, 'ok', v, e);
    },
    onPickerChange(value, option, e) {
      triggerEventValues(
        this,
        'pickerChange',
        resolveEventValues(value, option),
        e
      );
    },
    onVisibleChange(visible, e) {
      triggerEvent(this, 'visibleChange', resolveEventValue(visible), e);
    },
    onDismissPicker(e) {
      triggerEventOnly(this, 'cancel', e);
    },
    onChange(value, options, e) {
      triggerEventValues(this, 'change', resolveEventValues(value, options), e);
    },
    handleFormat(value, option) {
      const onFormat = getValueFromProps(this, 'onFormat');
      if (onFormat) {
        return onFormat(value, option);
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

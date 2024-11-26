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
import { FormDatePickerDefaultProps } from './props';

ComponentWithSignalStoreImpl(
  {
    store: () => i18nController,
    updateHook: effect,
    mapState: {
      locale: ({ store }) => store.currentLocale.value,
    },
  },
  FormDatePickerDefaultProps,
  {
    onOk(date, dateStr, e) {
      const v = resolveEventValues(date, dateStr);
      this.emit('onChange', v[0]);
      triggerEventValues(this, 'ok', v, e);
    },
    onPickerChange(date, dateStr, e) {
      triggerEventValues(
        this,
        'pickerChange',
        resolveEventValues(date, dateStr),
        e
      );
    },
    onVisibleChange(visible, e) {
      triggerEvent(this, 'visibleChange', resolveEventValue(visible), e);
    },
    onDismissPicker(e) {
      triggerEventOnly(this, 'dismissPicker', e);
    },

    handleFormat(date, dateStr) {
      const onFormat = getValueFromProps(this, 'onFormat');
      if (onFormat) {
        return onFormat(date, dateStr);
      }
    },
    handleFormatLabel(type, value) {
      const onFormatLabel = getValueFromProps(this, 'onFormatLabel');
      if (onFormatLabel) {
        return onFormatLabel(type, value);
      }
    },
  },
  {},
  [createForm()],
  {
  }
);

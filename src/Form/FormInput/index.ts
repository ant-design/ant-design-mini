import { resolveEventValue } from '../../_util/platform';
import { Component, triggerEvent } from '../../_util/simply';
import { createForm } from '../form';
import { FormInputDefaultProps } from './props';

Component({
  props: FormInputDefaultProps,
  methods: {
    handleRef(input) {
      /// #if ALIPAY
      this.input = input;
      /// #endif
      /// #if WECHAT
      this.input = input.detail;
      /// #endif
    },
    onChange(value, e) {
      this.emit('onChange', resolveEventValue(value));
      triggerEvent(this, 'change', resolveEventValue(value), e);
    },
    onBlur(value, e) {
      this.emit('onChange', resolveEventValue(value));
      triggerEvent(this, 'blur', resolveEventValue(value), e);
    },
    onFocus(value, e) {
      triggerEvent(this, 'focus', resolveEventValue(value), e);
    },
    onConfirm(value, e) {
      triggerEvent(this, 'confirm', resolveEventValue(value), e);
    },
  },
  mixins: [
    createForm({
      methods: {
        setFormData(this: any, values) {
          this.setData({
            ...this.data,
            formData: {
              ...this.data.formData,
              ...values,
            },
          });
          this.input && this.input.update(this.data.formData.value);
        },
      },
    }),
  ],
});

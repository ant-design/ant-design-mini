import { Component, triggerEvent } from '../../_util/simply';
import { resolveEventValue } from '../../_util/platform';
import { FormInputDefaultProps } from './props';
import { createForm } from '../form';

Component(
  FormInputDefaultProps,
  {
    handleRef(input) {
      this.input = input;
    },
    onChange(value, e) {
      this.emit('onChange', resolveEventValue(value));
      triggerEvent(this, 'change', resolveEventValue(value), e);
    },
    onBlur(value, e) {
      triggerEvent(this, 'blur', resolveEventValue(value), e);
    },
    onFocus(value, e) {
      triggerEvent(this, 'focus', resolveEventValue(value), e);
    },
    onConfirm(value, e) {
      triggerEvent(this, 'confirm', resolveEventValue(value), e);
    },
  },
  null,
  [
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
  ]
);

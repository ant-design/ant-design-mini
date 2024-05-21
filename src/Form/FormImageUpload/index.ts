import { Component, triggerEvent, getValueFromProps } from '../../_util/simply';
import { resolveEventValue } from '../../_util/platform';
import { FormImageUploadDefaultProps } from './props';
import { createForm } from '../form';

Component(
  FormImageUploadDefaultProps,
  {
    handleRef(imageUpload) {
      /// #if ALIPAY
      this.imageUpload = imageUpload;
      /// #endif
      /// #if WECHAT
      this.imageUpload = imageUpload.detail;
      /// #endif
    },
    onChange(value) {
      this.emit('onChange', resolveEventValue(value));
      triggerEvent(this, 'change', resolveEventValue(value));
    },
    onPreview(file) {
      triggerEvent(this, 'preview', resolveEventValue(file));
    },
    onChooseImageError(err) {
      triggerEvent(this, 'chooseImageError', resolveEventValue(err));
    },

    handleUpload(localFile) {
      const onUpload = getValueFromProps(this, 'onUpload');
      if (!onUpload) {
        throw new Error('need props onUpload');
      }
      return onUpload(localFile);
    },
    handleRemove(file) {
      const onRemove = getValueFromProps(this, 'onRemove');
      if (onRemove) {
        return onRemove(file);
      }
    },
    handleBeforeUpload(localFileList) {
      const onBeforeUpload = getValueFromProps(this, 'onBeforeUpload');
      if (onBeforeUpload) {
        return onBeforeUpload(localFileList);
      }
    },
  },
  {},
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
          this.imageUpload && this.imageUpload.update(this.data.formData.value);
        },
      },
    }),
  ],
  {
    /// #if WECHAT
    attached() {
      this.setData({
        handleUpload: this.handleUpload.bind(this),
        handleRemove: this.handleRemove.bind(this),
        handleBeforeUpload: this.handleBeforeUpload.bind(this),
      });
    },
    /// #endif
  }
);

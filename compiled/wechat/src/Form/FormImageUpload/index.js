var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { Component, triggerEvent, getValueFromProps } from '../../_util/simply';
import { resolveEventValue } from '../../_util/platform';
import { FormImageUploadDefaultProps } from './props';
import { createForm } from '../form';
Component(FormImageUploadDefaultProps, {
    handleRef: function (imageUpload) {
        this.imageUpload = imageUpload.detail;
    },
    onChange: function (value) {
        this.emit('onChange', resolveEventValue(value));
        triggerEvent(this, 'change', resolveEventValue(value));
    },
    onPreview: function (file) {
        triggerEvent(this, 'preview', resolveEventValue(file));
    },
    onChooseImageError: function (err) {
        triggerEvent(this, 'chooseImageError', resolveEventValue(err));
    },
    handleUpload: function (localFile) {
        var onUpload = getValueFromProps(this, 'onUpload');
        if (!onUpload) {
            throw new Error('need props onUpload');
        }
        return onUpload(localFile);
    },
    handleRemove: function (file) {
        var onRemove = getValueFromProps(this, 'onRemove');
        if (onRemove) {
            return onRemove(file);
        }
    },
    handleBeforeUpload: function (localFileList) {
        var onBeforeUpload = getValueFromProps(this, 'onBeforeUpload');
        if (onBeforeUpload) {
            return onBeforeUpload(localFileList);
        }
    },
}, {}, [
    createForm({
        methods: {
            setFormData: function (values) {
                this.setData(__assign(__assign({}, this.data), { formData: __assign(__assign({}, this.data.formData), values) }));
                this.imageUpload && this.imageUpload.update(this.data.formData.value);
            },
        },
    }),
], {
    attached: function () {
        this.setData({
            handleUpload: this.handleUpload.bind(this),
            handleRemove: this.handleRemove.bind(this),
            handleBeforeUpload: this.handleBeforeUpload.bind(this),
        });
    },
});

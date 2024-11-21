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
import { effect } from '@preact/signals-core';
import { resolveEventValue } from '../../_util/platform';
import { ComponentWithSignalStoreImpl, triggerEvent } from '../../_util/simply';
import i18nController from '../../_util/store';
import { createForm } from '../form';
import { FormTextareaDefaultProps } from './props';
ComponentWithSignalStoreImpl({
    store: function () { return i18nController; },
    updateHook: effect,
    mapState: {
        locale: function (_a) {
            var store = _a.store;
            return store.currentLocale.value;
        },
    },
}, FormTextareaDefaultProps, {
    handleRef: function (input) {
        this.input = input.detail;
    },
    onChange: function (value, e) {
        this.emit('onChange', resolveEventValue(value));
        triggerEvent(this, 'change', resolveEventValue(value), e);
    },
    onBlur: function (value, e) {
        triggerEvent(this, 'blur', resolveEventValue(value), e);
    },
    onFocus: function (value, e) {
        triggerEvent(this, 'focus', resolveEventValue(value), e);
    },
    onConfirm: function (value, e) {
        triggerEvent(this, 'confirm', resolveEventValue(value), e);
    },
    onClear: function (value, e) {
        this.emit('onChange', '');
        triggerEvent(this, 'change', resolveEventValue(value), e);
    },
}, null, [
    createForm({
        methods: {
            setFormData: function (values) {
                this.setData(__assign(__assign({}, this.data), { formData: __assign(__assign({}, this.data.formData), values) }));
                this.input && this.input.update(this.data.formData.value);
            },
        },
    }),
]);

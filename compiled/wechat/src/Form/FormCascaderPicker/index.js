import { effect } from '@preact/signals-core';
import { resolveEventValue, resolveEventValues } from '../../_util/platform';
import { ComponentWithSignalStoreImpl, getValueFromProps, triggerEvent, triggerEventOnly, triggerEventValues, } from '../../_util/simply';
import i18nController from '../../_util/store';
import { createForm } from '../form';
import { FormCascaderPickerDefaultProps } from './props';
ComponentWithSignalStoreImpl({
    store: function () { return i18nController; },
    updateHook: effect,
    mapState: {
        locale: function (_a) {
            var store = _a.store;
            return store.currentLocale.value;
        },
    },
}, FormCascaderPickerDefaultProps, {
    onOk: function (value, option, e) {
        var v = resolveEventValues(value, option);
        this.emit('onChange', v[0]);
        triggerEventValues(this, 'ok', v, e);
    },
    onPickerChange: function (value, option, e) {
        triggerEventValues(this, 'pickerChange', resolveEventValues(value, option), e);
    },
    onVisibleChange: function (visible, e) {
        triggerEvent(this, 'visibleChange', resolveEventValue(visible), e);
    },
    onDismissPicker: function (e) {
        triggerEventOnly(this, 'cancel', e);
    },
    onChange: function (value, options, e) {
        triggerEventValues(this, 'change', resolveEventValues(value, options), e);
    },
    handleFormat: function (value, option) {
        var onFormat = getValueFromProps(this, 'onFormat');
        if (onFormat) {
            return onFormat(value, option);
        }
    },
}, {}, [createForm()], {
    attached: function () {
        this.setData({
            handleFormat: this.handleFormat.bind(this),
        });
    },
});

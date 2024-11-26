import { effect } from '@preact/signals-core';
import { resolveEventValue, resolveEventValues } from '../../_util/platform';
import { ComponentWithSignalStoreImpl, getValueFromProps, triggerEvent, triggerEventOnly, triggerEventValues, } from '../../_util/simply';
import i18nController from '../../_util/store';
import { createForm } from '../form';
import { FormPickerDefaultProps } from './props';
ComponentWithSignalStoreImpl({
    store: function () { return i18nController; },
    updateHook: effect,
    mapState: {
        locale: function (_a) {
            var store = _a.store;
            return store.currentLocale.value;
        },
    },
}, FormPickerDefaultProps, {
    onOk: function (value, column, e) {
        var v = resolveEventValues(value, column);
        this.emit('onChange', v[0]);
        triggerEventValues(this, 'ok', v, e);
    },
    onChange: function (value, column, e) {
        triggerEventValues(this, 'change', resolveEventValues(value, column), e);
    },
    onVisibleChange: function (visible, e) {
        triggerEvent(this, 'visibleChange', resolveEventValue(visible), e);
    },
    onDismissPicker: function (e) {
        triggerEventOnly(this, 'cancel', e);
    },
    handleFormat: function (value, column) {
        var onFormat = getValueFromProps(this, 'onFormat');
        if (onFormat) {
            return onFormat(value, column);
        }
    },
}, {}, [createForm()], {
    attached: function () {
        this.setData({
            handleFormat: this.handleFormat.bind(this),
        });
    },
});

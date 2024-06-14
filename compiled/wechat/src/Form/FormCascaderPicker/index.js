import { Component, triggerEvent, triggerEventValues, triggerEventOnly, getValueFromProps, } from '../../_util/simply';
import { resolveEventValue, resolveEventValues } from '../../_util/platform';
import { FormCascaderPickerDefaultProps } from './props';
import { createForm } from '../form';
Component(FormCascaderPickerDefaultProps, {
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

import { Component, triggerEvent, triggerEventValues, triggerEventOnly, getValueFromProps, } from '../../_util/simply';
import { resolveEventValue, resolveEventValues } from '../../_util/platform';
import { FormPickerDefaultProps } from './props';
import { createForm } from '../form';
Component(FormPickerDefaultProps, {
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

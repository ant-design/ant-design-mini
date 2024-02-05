import { useEvent } from 'functional-mini/component';
import { mountComponent } from '../../_util/component';
import { useComponentEvent } from '../../_util/hooks/useComponentEvent';
import { useHandleCustomEvent, useHandleCustomEventOnly, useMultipleValueHandleCustomEvent, } from '../../_util/hooks/useHandleCustomEvent';
import { platform } from '../../_util/platform';
import { useFormItem } from '../use-form-item';
import { FormRangePickerDefaultProps } from './props';
var FormDatePicker = function (props) {
    var _a = useFormItem(props), formData = _a.formData, emit = _a.emit;
    var _b = useComponentEvent(props), triggerEventValues = _b.triggerEventValues, triggerEventOnly = _b.triggerEventOnly, triggerEvent = _b.triggerEvent;
    useMultipleValueHandleCustomEvent('onOk', function (date, dateStr, e) {
        emit('onChange', date.map(function (o) {
            if (platform() === 'wechat') {
                return o.getTime();
            }
            return o;
        }));
        triggerEventValues('ok', [date, dateStr], e);
    });
    useMultipleValueHandleCustomEvent('onPickerChange', function (type, date, dateStr, e) {
        triggerEventValues('pickerChange', [type, date, dateStr], e);
    });
    useHandleCustomEvent('onVisibleChange', function (visible, e) {
        triggerEvent('visibleChange', visible, e);
    });
    useHandleCustomEventOnly('onDismissPicker', function (e) {
        triggerEventOnly('dismissPicker', e);
    });
    useEvent('handleFormat', function (date, dateStr) {
        if (props.onFormat) {
            return props.onFormat(date, dateStr);
        }
    }, {
        handleResult: true,
    });
    useEvent('handleFormatLabel', function (type, value) {
        if (props.onFormatLabel) {
            return props.onFormatLabel(type, value);
        }
    }, {
        handleResult: true,
    });
    return {
        formData: formData,
    };
};
mountComponent(FormDatePicker, FormRangePickerDefaultProps);

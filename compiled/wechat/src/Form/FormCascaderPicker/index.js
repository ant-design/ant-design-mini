import { useEvent } from 'functional-mini/component';
import { mountComponent } from '../../_util/component';
import { useComponentEvent } from '../../_util/hooks/useComponentEvent';
import { useHandleCustomEvent, useHandleCustomEventOnly, useMultipleValueHandleCustomEvent, } from '../../_util/hooks/useHandleCustomEvent';
import { useFormItem } from '../use-form-item';
import { FormCascaderPickerDefaultProps, } from './props';
var FormCascaderPicker = function (props) {
    var _a = useFormItem(props), formData = _a.formData, emit = _a.emit;
    var _b = useComponentEvent(props), triggerEventValues = _b.triggerEventValues, triggerEventOnly = _b.triggerEventOnly, triggerEvent = _b.triggerEvent;
    useMultipleValueHandleCustomEvent('onOk', function (value, option, e) {
        emit('onChange', value);
        triggerEventValues('ok', [value, option], e);
    });
    useMultipleValueHandleCustomEvent('onPickerChange', function (value, option, e) {
        triggerEventValues('pickerChange', [value, option], e);
    });
    useHandleCustomEvent('onVisibleChange', function (visible, e) {
        triggerEvent('visibleChange', visible, e);
    });
    useEvent('handleFormat', function (value, option) {
        if (props.onFormat) {
            return props.onFormat(value, option);
        }
    }, { handleResult: true });
    useHandleCustomEventOnly('onDismissPicker', function (e) {
        triggerEventOnly('cancel', e);
    });
    useMultipleValueHandleCustomEvent('onChange', function (value, options, e) {
        triggerEventValues('change', [value, options], e);
    });
    return {
        formData: formData,
    };
};
mountComponent(FormCascaderPicker, FormCascaderPickerDefaultProps);

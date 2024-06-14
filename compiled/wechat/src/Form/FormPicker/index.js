import { useEvent } from 'functional-mini/component';
import { mountComponent } from '../../_util/component';
import { useComponentEvent } from '../../_util/hooks/useComponentEvent';
import { useHandleCustomEvent, useMultipleValueHandleCustomEvent, } from '../../_util/hooks/useHandleCustomEvent';
import { useFormItem } from '../use-form-item';
import { FormPickerDefaultProps } from './props';
var FormPicker = function (props) {
    var _a = useFormItem(props), formData = _a.formData, emit = _a.emit;
    var _b = useComponentEvent(props), triggerEventValues = _b.triggerEventValues, triggerEventOnly = _b.triggerEventOnly, triggerEvent = _b.triggerEvent;
    useMultipleValueHandleCustomEvent('onOk', function (value, column, e) {
        emit('onChange', value);
        triggerEventValues('ok', [value, column], e);
    });
    useMultipleValueHandleCustomEvent('onChange', function (value, column, e) {
        triggerEventValues('change', [value, column], e);
    });
    useHandleCustomEvent('onVisibleChange', function (visible, e) {
        triggerEvent('visibleChange', visible, e);
    });
    useEvent('handleFormat', function (value, column) {
        if (props.onFormat) {
            return props.onFormat(value, column);
        }
    }, {
        handleResult: true,
    });
    useHandleCustomEvent('onDismissPicker', function (e) {
        triggerEventOnly('cancel', e);
    });
    return {
        formData: formData,
    };
};
mountComponent(FormPicker, FormPickerDefaultProps);

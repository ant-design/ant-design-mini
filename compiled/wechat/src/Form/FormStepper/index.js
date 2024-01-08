import { mountComponent } from '../../_util/component';
import { useComponentEvent } from '../../_util/hooks/useComponentEvent';
import { useHandleCustomEvent, useHandleCustomEventOnly, } from '../../_util/hooks/useHandleCustomEvent';
import { useFormItem } from '../use-form-item';
import { FormStepperDefaultProps } from './props';
var FormStepper = function (props) {
    var _a = useFormItem(props), formData = _a.formData, emit = _a.emit;
    var _b = useComponentEvent(props), triggerEvent = _b.triggerEvent, triggerEventOnly = _b.triggerEventOnly;
    useHandleCustomEvent('onChange', function (value, e) {
        emit('onChange', value);
        triggerEvent('change', value, e);
    });
    useHandleCustomEventOnly('onBlur', function (e) {
        triggerEventOnly('blur', e);
    });
    useHandleCustomEventOnly('onFocus', function (e) {
        triggerEventOnly('focus', e);
    });
    useHandleCustomEvent('onConfirm', function (value, e) {
        triggerEvent('confirm', value, e);
    });
    return {
        formData: formData,
    };
};
mountComponent(FormStepper, FormStepperDefaultProps);

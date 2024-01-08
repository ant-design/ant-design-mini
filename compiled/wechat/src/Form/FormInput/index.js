import { useEffect, useRef } from 'functional-mini/component';
import { mountComponent } from '../../_util/component';
import { useComponentEvent } from '../../_util/hooks/useComponentEvent';
import { useHandleCustomEvent } from '../../_util/hooks/useHandleCustomEvent';
import { useFormItem } from '../use-form-item';
import { FormInputFunctionalProps } from './props';
var FormInput = function (props) {
    var _a = useFormItem(props), formData = _a.formData, emit = _a.emit;
    var triggerEvent = useComponentEvent(props).triggerEvent;
    var inputRef = useRef();
    useHandleCustomEvent('handleRef', function (input) {
        inputRef.current = input;
    });
    useEffect(function () {
        if (inputRef.current) {
            inputRef.current.update(formData.value);
        }
    }, [formData]);
    useHandleCustomEvent('onChange', function (value, e) {
        emit('onChange', value);
        triggerEvent('change', value, e);
    });
    useHandleCustomEvent('onBlur', function (value, e) {
        triggerEvent('blur', value, e);
    });
    useHandleCustomEvent('onFocus', function (value, e) {
        triggerEvent('focus', value, e);
    });
    useHandleCustomEvent('onConfirm', function (value, e) {
        triggerEvent('confirm', value, e);
    });
    return {
        formData: formData,
    };
};
mountComponent(FormInput, FormInputFunctionalProps);

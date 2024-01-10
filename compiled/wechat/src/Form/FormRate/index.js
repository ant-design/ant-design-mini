import { mountComponent } from '../../_util/component';
import { useComponentEvent } from '../../_util/hooks/useComponentEvent';
import { useHandleCustomEvent } from '../../_util/hooks/useHandleCustomEvent';
import { useFormItem } from '../use-form-item';
import { FormRateDefaultProps } from './props';
var FormRate = function (props) {
    var _a = useFormItem(props), formData = _a.formData, emit = _a.emit;
    var triggerEvent = useComponentEvent(props).triggerEvent;
    useHandleCustomEvent('onChange', function (value, e) {
        emit('onChange', value);
        triggerEvent('change', value, e);
    });
    return {
        formData: formData,
    };
};
mountComponent(FormRate, FormRateDefaultProps);

import { useMultipleValueHandleCustomEvent } from '../../_util/hooks/useHandleCustomEvent';
import { mountComponent } from '../../_util/component';
import { useComponentEvent } from '../../_util/hooks/useComponentEvent';
import { useFormItem } from '../use-form-item';
import { FormSelectorDefaultProps } from './props';
var FormSelector = function (props) {
    var _a = useFormItem(props), formData = _a.formData, emit = _a.emit;
    var triggerEventValues = useComponentEvent(props).triggerEventValues;
    useMultipleValueHandleCustomEvent('onChange', function (value, item, e) {
        emit('onChange', value);
        triggerEventValues('change', [value, item], e);
    });
    useMultipleValueHandleCustomEvent('onSelectMax', function (value, item, e) {
        triggerEventValues('selectMax', [value, item], e);
    });
    useMultipleValueHandleCustomEvent('onSelectMin', function (value, item, e) {
        triggerEventValues('selectMin', [value, item], e);
    });
    return {
        formData: formData,
    };
};
mountComponent(FormSelector, FormSelectorDefaultProps);

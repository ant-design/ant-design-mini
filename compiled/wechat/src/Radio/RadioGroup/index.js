import { RadioGroupFunctionalProps } from './props';
import { mountComponent } from '../../_util/component';
import { useMixState } from '../../_util/hooks/useMixState';
import { useEvent } from 'functional-mini/component';
import { useComponentEvent } from '../../_util/hooks/useComponentEvent';
var RadioGroup = function (props) {
    var _a = useMixState(props.defaultValue, {
        value: props.value,
    }), value = _a[0], _b = _a[1], isControlled = _b.isControlled, update = _b.update;
    var triggerEvent = useComponentEvent(props).triggerEvent;
    useEvent('onChange', function (e) {
        var index = e.currentTarget.dataset.index;
        var value = props.options[index].value;
        if (!isControlled) {
            update(value);
        }
        triggerEvent('change', value, e);
    });
    return {
        mixin: {
            value: value,
        },
    };
};
mountComponent(RadioGroup, RadioGroupFunctionalProps);

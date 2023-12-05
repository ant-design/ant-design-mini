import { mountComponent } from '../_util/component';
import { useMergedState, hasValue } from '../_util/hooks/useMergedState';
import { useEvent } from 'functional-mini/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
var Switch = function (props) {
    var _a = useMergedState(props.defaultChecked, {
        value: props.checked,
    }), value = _a[0], updateValue = _a[1];
    var triggerEvent = useComponentEvent(props).triggerEvent;
    useEvent('onChange', function (e) {
        var newValue = !value;
        if (!hasValue(props.checked)) {
            updateValue(newValue);
        }
        triggerEvent('change', newValue, e);
    });
    return {
        mixin: { value: value },
    };
};
mountComponent(Switch, {
    checked: null,
    loading: false,
    color: '',
    checkedText: '',
    uncheckedText: '',
    size: 'medium',
    disabled: false,
    defaultChecked: false,
});

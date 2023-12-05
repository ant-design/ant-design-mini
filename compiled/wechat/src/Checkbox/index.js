import { useEvent } from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { useMixState } from '../_util/hooks/useMixState';
var Checkbox = function (props) {
    var _a = useMixState(props.defaultChecked, {
        value: props.checked,
    }), value = _a[0], _b = _a[1], isControlled = _b.isControlled, update = _b.update;
    var triggerEvent = useComponentEvent(props).triggerEvent;
    useEvent('onChange', function (e) {
        var newValue = !value;
        if (!isControlled) {
            update(newValue);
        }
        triggerEvent('change', newValue, e);
    });
    return {
        mixin: {
            value: value,
        },
    };
};
mountComponent(Checkbox, {
    value: null,
    checked: null,
    defaultChecked: null,
    disabled: false,
    color: '',
});

import { useEvent } from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { useMixState } from '../_util/hooks/useMixState';
var Radio = function (props) {
    var _a = useMixState(props.defaultChecked, {
        value: props.checked,
    }), radioValue = _a[0], _b = _a[1], isControlled = _b.isControlled, update = _b.update;
    var triggerEvent = useComponentEvent(props).triggerEvent;
    useEvent('handleTap', function (e) {
        var value = !radioValue;
        if (!isControlled) {
            update(value);
        }
        triggerEvent('change', value, e);
    });
    return {
        mixin: {
            value: radioValue,
        },
    };
};
mountComponent(Radio, {
    defaultChecked: null,
    checked: null,
    disabled: false,
});

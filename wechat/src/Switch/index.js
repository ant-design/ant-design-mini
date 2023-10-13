import { mountComponent } from '../_util/component';
import { useMergedState, hasValue } from '../_util/hooks/useMergedState';
import { useEvent } from 'functional-mini/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
const Switch = (props) => {
    const [value, updateValue] = useMergedState(props.defaultChecked, {
        value: props.checked,
    });
    const { triggerEvent } = useComponentEvent(props);
    useEvent('onChange', (e) => {
        const newValue = !value;
        if (!hasValue(props.checked)) {
            updateValue(newValue);
        }
        triggerEvent('change', value, e);
    }, [props, value]);
    return {
        mixin: { value },
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

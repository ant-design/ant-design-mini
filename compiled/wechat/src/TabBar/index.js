import { useEvent } from 'functional-mini/component';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { useMixState } from '../_util/hooks/useMixState';
import { TabBarFunctionalProps } from './props';
var TabBar = function (props) {
    var _a = useMixState(props.defaultCurrent, {
        value: props.current,
    }), value = _a[0], _b = _a[1], isControlled = _b.isControlled, update = _b.update;
    var triggerEvent = useComponentEvent(props).triggerEvent;
    useEvent('onChange', function (e) {
        var index = e.currentTarget.dataset.index;
        if (index === value) {
            return;
        }
        if (!isControlled) {
            update(index);
        }
        triggerEvent('change', index, e);
    });
    return {
        mixin: {
            value: value,
        },
    };
};
mountComponent(TabBar, TabBarFunctionalProps);

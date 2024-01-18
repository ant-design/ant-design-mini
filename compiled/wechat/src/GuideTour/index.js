import { useEvent } from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { useMixState } from '../_util/hooks/useMixState';
import { GuideTourDefaultProps } from './props';
var GuideTour = function (props) {
    var _a = useMixState(props.defaultCurrent, {
        value: props.current,
    }), state = _a[0], _b = _a[1], isControlled = _b.isControlled, update = _b.update;
    var _c = useComponentEvent(props), triggerEvent = _c.triggerEvent, triggerEventOnly = _c.triggerEventOnly;
    useEvent('onNext', function () {
        var currentValue = state;
        var newCurrent = currentValue + 1;
        if (!isControlled) {
            update(newCurrent);
        }
        triggerEvent('change', newCurrent);
    });
    useEvent('onPrev', function () {
        var currentValue = state;
        var newCurrent = currentValue - 1;
        if (!isControlled) {
            update(newCurrent);
        }
        triggerEvent('change', newCurrent);
    });
    useEvent('onCancel', function () {
        triggerEventOnly('cancel');
    });
    useEvent('onSwiperChange', function (e) {
        var current = e.detail.current;
        if (!isControlled) {
            update(current);
        }
        triggerEvent('change', current);
    });
    return {
        mixin: { value: state },
    };
};
mountComponent(GuideTour, GuideTourDefaultProps);

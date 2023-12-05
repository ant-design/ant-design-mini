import { useEvent } from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
var Mask = function (props) {
    var triggerEventOnly = useComponentEvent(props).triggerEventOnly;
    useEvent('onMaskClick', function (e) {
        triggerEventOnly('maskTap', e);
    });
    return {};
};
mountComponent(Mask, {
    show: true,
});

import { useEvent } from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { ModalFunctionalProps } from './props';
var Modal = function (props) {
    var triggerEventOnly = useComponentEvent(props).triggerEventOnly;
    useEvent('onClose', function () {
        triggerEventOnly('close');
    });
    useEvent('onMaskClose', function () {
        if (props.maskClosable) {
            triggerEventOnly('close');
        }
    });
    useEvent('onPrimaryButtonTap', function () {
        triggerEventOnly('primaryButtonTap');
    });
    useEvent('onSecondaryButtonTap', function () {
        triggerEventOnly('secondaryButtonTap');
    });
    useEvent('onCancelButtonTap', function () {
        triggerEventOnly('cancelButtonTap');
    });
    return {};
};
mountComponent(Modal, ModalFunctionalProps);

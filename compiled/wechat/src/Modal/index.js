import { Component, triggerEventOnly } from '../_util/simply';
import { ModalFunctionalProps } from './props';
Component(ModalFunctionalProps, {
    onClose: function () {
        triggerEventOnly(this, 'close');
    },
    onMaskClose: function () {
        if (this.props.maskClosable) {
            triggerEventOnly(this, 'close');
        }
    },
    onPrimaryButtonTap: function () {
        triggerEventOnly(this, 'primaryButtonTap');
    },
    onSecondaryButtonTap: function () {
        triggerEventOnly(this, 'secondaryButtonTap');
    },
    onCancelButtonTap: function () {
        triggerEventOnly(this, 'cancelButtonTap');
    },
});

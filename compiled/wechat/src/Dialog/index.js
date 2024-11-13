import get from '../_util/get';
import { Component, triggerEventOnly } from '../_util/simply';
import { ModalFunctionalProps } from './props';
Component(ModalFunctionalProps, {
    onClose: function () {
        triggerEventOnly(this, 'close');
    },
    onMaskClose: function () {
        if (this.properties.maskClosable) {
            triggerEventOnly(this, 'close');
        }
    },
    onButtonTap: function (e) {
        // 按钮点击没有回调的场景直接关闭弹框
        if (!this.props.onButtonTap) {
            return this.onClose();
        }
        this.props.onButtonTap(get(e, 'currentTarget.dataset.item'));
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

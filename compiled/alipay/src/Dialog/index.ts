import get from '../_util/get';
import { Component, triggerEventOnly } from '../_util/simply';
import { ModalFunctionalProps } from './props';

Component(ModalFunctionalProps, {
  onClose() {
    triggerEventOnly(this, 'close');
  },
  onMaskClose() {
    if (this.props.maskClosable) {
      triggerEventOnly(this, 'close');
    }
  },
  onButtonTap(e) {
    // 按钮点击没有回调的场景直接关闭弹框
    if (!this.props.onButtonTap) {
      return this.onClose();
    }
    this.props.onButtonTap(get(e, 'currentTarget.dataset.item'));
  },  
  onPrimaryButtonTap() {
    triggerEventOnly(this, 'primaryButtonTap');
  },
  onSecondaryButtonTap() {
    triggerEventOnly(this, 'secondaryButtonTap');
  },
  onCancelButtonTap() {
    triggerEventOnly(this, 'cancelButtonTap');
  },
});

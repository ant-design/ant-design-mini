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

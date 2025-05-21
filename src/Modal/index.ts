import { Component, triggerEventOnly } from '../_util/simply';
import { ModalFunctionalProps } from './props';

Component({
  props: ModalFunctionalProps,
  methods: {
    onClose() {
      triggerEventOnly(this, 'close');
    },
    onMaskClose() {
      /// #if WECHAT
      if (this.properties.maskClosable) {
        triggerEventOnly(this, 'close');
      }
      /// #endif
      /// #if ALIPAY || ALIPAYNATIVE
      if (this.props.maskClosable) {
        triggerEventOnly(this, 'close');
      }
      /// #endif
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
  },
});

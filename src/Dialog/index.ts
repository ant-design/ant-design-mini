import {
  Component,
  getValueFromProps,
  triggerEvent,
  triggerEventOnly,
} from '../_util/simply';
import { ModalFunctionalProps } from './props';

Component({
  props: ModalFunctionalProps,
  methods: {
    onClose() {
      triggerEventOnly(this, 'close');
    },
    onMaskClose() {
      const maskClosable = getValueFromProps(this, 'maskClosable');
      if (maskClosable) {
        triggerEventOnly(this, 'close');
      }
    },
    onButtonTap(e) {
      const onButtonTap = getValueFromProps(this, 'onButtonTap');
      /// #if ALIPAY
      // 按钮点击没有回调的场景直接关闭弹框
      if (!onButtonTap) {
        return this.onClose();
      }
      /// #endif
      const { item } = e.currentTarget.dataset;
      triggerEvent(this, 'buttonTap', item, e);
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

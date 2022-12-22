import { ModalDefaultProps } from './props';

Component({
  props: ModalDefaultProps,
  methods: {
    onClose() {
      const { onClose } = this.props;
      if (onClose) {
        onClose();
      }
    },
    onMaskClose() {
      const { onClose, maskClosable } = this.props;
      if (maskClosable && onClose) {
        onClose();
      }
    },
    onPrimaryButtonTap() {
      const { onPrimaryButtonTap } = this.props;
      if (onPrimaryButtonTap) {
        onPrimaryButtonTap();
      }
    },
    onSecondaryButtonTap() {
      const { onSecondaryButtonTap } = this.props;
      if (onSecondaryButtonTap) {
        onSecondaryButtonTap();
      }
    },
    onCancelButtonTap() {
      const { onCancelButtonTap } = this.props;
      if (onCancelButtonTap) {
        onCancelButtonTap();
      }
    },
  },
});

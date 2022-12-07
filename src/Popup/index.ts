import { PopupDefaultProps } from './props';

Component({
  props: PopupDefaultProps,
  data: {
    closing: false,
  },
  didUpdate(prevProps) {
    const { visible, duration, animation } = this.props;
    if (prevProps.visible && !visible) {
      if (animation && duration > 0) {
        this.setData({ closing: true });
      }
    }
  },
  methods: {
    onTapMask() {
      const { closing } = this.data;
      if (closing) {
        return;
      }
      const { maskClosable, onClose } = this.props;
      if (maskClosable && onClose) {
        onClose();
      }
    },
    onAnimationEnd() {
      const { closing } = this.data;
      if (closing) {
        this.setData({ closing: false });
      }
    },
  },
});

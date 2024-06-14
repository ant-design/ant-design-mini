import { PopupDefaultProps } from './props';

Component({
  props: PopupDefaultProps,
  data: {
    supportSjs: my.canIUse('sjs.event'),
    closing: false,
  },
  didUpdate(prevProps) {
    const { visible, duration, animation } = this.props;
    if (prevProps.visible && !visible) {
      if (this.renderer !== 'native' && animation && duration > 0) {
        this.setData({ closing: true });
      }
    }
  },
  methods: {
    onMaskClose() {
      const { closing } = this.data;
      if (closing) {
        return;
      }
      const { maskClosable } = this.props;
      if (maskClosable) {
        this.onClose();
      }
    },
    onClose() {
      const { onClose } = this.props;
      if (onClose) {
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

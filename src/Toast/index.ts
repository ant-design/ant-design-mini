import { ToastDefaultProps } from './props';
import fmtEvent from '../_util/fmtEvent';

Component({
  props: ToastDefaultProps,
  data: {
    show: false,
    timer: null,
  },
  didUpdate(prev) {
    if (!prev.visible && this.props.visible) {
      this.handleShowToast();
    } else if (!this.props.visible && this.data.show) {
      this.closeMask();
    }
  },
  didMount() {
    if (this.props.visible) {
      this.handleShowToast();
    }
  },
  methods: {
    closeMask() {
      if (this.data.timer) {
        clearTimeout(this.data.timer);
      }
      this.setData({ show: false, timer: null });

      this.props.onClose?.(fmtEvent(this.props, {}));
    },
    handleShowToast() {
      this.setData({ show: true });
      if (this.props.duration > 0) {
        const timer = setTimeout(() => {
          this.closeMask();
        }, this.props.duration);
        this.setData({ timer });
      }
    },
    handleClickMask() {
      if (this.props.showMask && this.props.maskCloseable) {
        this.closeMask();
      }
    },
  },
});

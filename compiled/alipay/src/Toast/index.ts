import { ToastDefaultProps } from './props';
import fmtEvent from '../_util/fmtEvent';
import '../_util/assert-component2';

Component({
  props: ToastDefaultProps,
  data: {
    show: false,
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
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.setData({ show: false });
      this.timer = false;
      this.props.onClose?.(fmtEvent(this.props, {}));
    },
    handleShowToast() {
      this.setData({ show: true });
      if (this.props.duration > 0) {
        const timer = setTimeout(() => {
          this.closeMask();
        }, this.props.duration);
        this.timer = timer;
      }
    },
    handleClickMask() {
      if (this.props.showMask && this.props.maskCloseable) {
        this.closeMask();
      }
    },
  },
});

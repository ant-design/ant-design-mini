import {
  Component,
  triggerEventOnly,
  getValueFromProps,
} from '../_util/simply';
import { ToastDefaultProps } from './props';

Component(
  ToastDefaultProps,
  {
    closeMask() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.setData({ show: false });
      this.timer = null;
      triggerEventOnly(this, 'close');
    },
    handleShowToast() {
      this.setData({ show: true });

      const duration = getValueFromProps(this, 'duration');
      if (duration > 0) {
        const timer = setTimeout(() => {
          this.closeMask();
        }, duration);
        this.timer = timer;
      }
    },
    handleClickMask() {
      const [showMask, maskCloseable] = getValueFromProps(this, [
        'showMask',
        'maskCloseable',
      ]);
      if (showMask && maskCloseable) {
        this.closeMask();
      }
    },
  },
  {
    show: false,
  },
  undefined,
  {
    timer: null,

    didUpdate(prev) {
      const visible = getValueFromProps(this, 'visible');
      if (!prev.visible && visible) {
        this.handleShowToast();
      } else if (!visible && this.data.show) {
        this.closeMask();
      }
    },
    didMount() {
      const visible = getValueFromProps(this, 'visible');
      if (visible) {
        this.handleShowToast();
      }
    },

  }
);

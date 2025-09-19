import {
  Component,
  getValueFromProps,
  triggerEventOnly,
} from '../_util/simply';
import { ToastDefaultProps } from './props';

Component({
  props: ToastDefaultProps,
  data: {
    show: false,
    closing: false,
  },
  timer: null,
  methods: {
    closeMask() {
      const { closing } = this.data;
      if (closing) {
        return;
      }
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.setData({ show: false, closing: true });
      this.timer = null;
      triggerEventOnly(this, 'close');
    },
    handleShowToast() {
      this.setData({ show: true, closing: false });

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
    onAnimationEnd() {
      if (this.data.closing) {
        this.setData({ show: false, closing: false });
        this.timer = null;
        triggerEventOnly(this, 'close');
      }
    },
  },
  /// #if ALIPAY
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
  /// #endif

  /// #if WECHAT
  observers: {
    'visible': function (visible) {
      if (visible) {
        this.handleShowToast();
      } else if (!visible && this.data.show) {
        this.closeMask();
      }
    },
    'content': function (content) {
      this.setData({
        displayContent:
          content === 'string' ? content.substring(0, 24) : content,
      });
    },
  },
  attached() {
    const visible = getValueFromProps(this, 'visible');
    if (visible) {
      this.handleShowToast();
    }
  },
  /// #endif
});

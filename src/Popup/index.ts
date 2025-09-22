import { isOldSDKVersion } from '../_util/platform';
import {
  Component,
  getValueFromProps,
  triggerEventOnly,
} from '../_util/simply';
import { PopupDefaultProps } from './props';

const isOldVersion = isOldSDKVersion();

Component({
  props: PopupDefaultProps,
  data: {
    closing: false,
    isOldVersion,
  },
  methods: {
    onClickCloseIcon() {
      const { closing } = this.data;
      if (closing) {
        return;
      }
      triggerEventOnly(this, 'close');
    },
    onClickBack() {
      triggerEventOnly(this, 'clickBack');
    },
    onTapMask() {
      const { closing } = this.data;
      if (closing) {
        return;
      }
      triggerEventOnly(this, 'close');
    },
    onAnimationEnd() {
      const { closing } = this.data;
      if (closing) {
        this.setData({ closing: false });
      }
      const [visible, duration, animation] = getValueFromProps(this, [
        'visible',
        'duration',
        'animation',
      ]);
      const enableAnimation =
        animation && (duration > 0 || typeof duration !== 'number');
      if (enableAnimation) {
        triggerEventOnly(this, visible ? 'afterShow' : 'afterClose');
      }
    },
  },

  /// #if ALIPAY
  async deriveDataFromProps(nextProps) {
    const [visible, duration, animation] = getValueFromProps(this, [
      'visible',
      'duration',
      'animation',
    ]);
    const enableAnimation =
      animation && (duration > 0 || typeof duration !== 'number');
    if (
      Boolean(nextProps.visible) !== Boolean(visible) &&
      enableAnimation &&
      !nextProps.visible &&
      !this.data.closing
    ) {
      this.setData({ closing: true });
    }
  },
  didUpdate(prevProps) {
    const [visible, duration, animation] = getValueFromProps(this, [
      'visible',
      'duration',
      'animation',
    ]);
    const enableAnimation =
      animation && (duration > 0 || typeof duration !== 'number');
    if (prevProps.visible !== visible && !enableAnimation) {
      triggerEventOnly(this, visible ? 'afterShow' : 'afterClose');
    }
  },
  /// #endif
  /// #if WECHAT
  observers: {
    '**': function (data) {
      const prevData = this._prevData || this.data;
      this._prevData = { ...data };
      const { visible, duration, animation, closing } = data;
      const enableAnimation =
        animation && (duration > 0 || typeof duration !== 'number');
      if (
        enableAnimation &&
        prevData.visible !== data.visible &&
        !visible &&
        !closing
      ) {
        this.setData({ closing: true });
      }
      if (prevData.visible !== data.visible && !enableAnimation) {
        triggerEventOnly(this, visible ? 'afterShow' : 'afterClose');
      }
    },
  },
  /// #endif
});

import {
  Component,
  triggerEventOnly,
  getValueFromProps,
} from '../_util/simply';
import { PopupDefaultProps } from './props';
import { isOldSDKVersion } from '../_util/platform';

const isOldVersion = isOldSDKVersion();

Component(
  PopupDefaultProps,
  {
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
      const enableAnimation = animation && duration > 0;
      if (enableAnimation) {
        triggerEventOnly(this, visible ? 'afterShow' : 'afterClose');
      }
    },
  },
  {
    closing: false,
    isOldVersion,
  },
  undefined,
  {
    /// #if ALIPAY
    async deriveDataFromProps(nextProps) {
      const [visible, duration, animation] = getValueFromProps(this, [
        'visible',
        'duration',
        'animation',
      ]);
      const enableAnimation = animation && duration > 0;
      if (nextProps.visible !== visible) {
        if (enableAnimation && !nextProps.visible && !this.data.closing) {
          this.setData({ closing: true });
        }
        if (!enableAnimation) {
          triggerEventOnly(this, visible ? 'afterShow' : 'afterClose');
        }
      }
    },
    /// #endif
    /// #if WECHAT
    observers: {
      'visible': function (nextProps) {
        const { visible, duration, animation } = nextProps;
        const enableAnimation = animation && duration > 0;
        if (enableAnimation && !visible && !this.data.closing) {
          this.setData({ closing: true });
        }
        if (!enableAnimation) {
          triggerEventOnly(this, visible ? 'afterShow' : 'afterClose');
        }
      },
    },
    /// #endif
  }
);

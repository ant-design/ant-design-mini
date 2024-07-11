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
    didUpdate(prevProps) {
      const [visible, duration, animation] = getValueFromProps(this, [
        'visible',
        'duration',
        'animation',
      ]);
      const enableAnimation = animation && duration > 0;
      if (prevProps.visible !== visible) {
        if (enableAnimation && !visible) {
          setTimeout(() => {
            // 这里需要用setTimeout包一下，解决支付宝小程序Picker中导致 targetId not match
            this.setData({ closing: true });
          });
        }
        if (!enableAnimation) {
          triggerEventOnly(this, visible ? 'afterShow' : 'afterClose');
        }
      }
    },
  }
);

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
          this.setData({ closing: true });
        }
      }
    },
    deriveDataFromProps(nextProps) {
      const { visible, duration, animation } = nextProps;
      const enableAnimation = animation && duration > 0;
      if (getValueFromProps(this, 'visible') !== visible) {
        if (enableAnimation && !visible) {
          this.setData({ closing: true });
        }
      }
    },
  }
);

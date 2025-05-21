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
      const enableAnimation = animation && duration > 0;
      if (enableAnimation) {
        triggerEventOnly(this, visible ? 'afterShow' : 'afterClose');
      }
    },
  },

  /// #if ALIPAY || ALIPAYNATIVE
  async deriveDataFromProps(nextProps) {
    const [visible, duration, animation] = getValueFromProps(this, [
      'visible',
      'duration',
      'animation',
    ]);
    const enableAnimation = animation && duration > 0;

    if (
      nextProps.visible !== visible &&
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
    const enableAnimation = animation && duration > 0;
    if (prevProps.visible !== visible && !enableAnimation) {
      triggerEventOnly(this, visible ? 'afterShow' : 'afterClose');
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
});

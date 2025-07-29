import {
  Component,
  getValueFromProps,
  triggerCatchEvent,
  triggerEventOnly,
} from '../_util/simply';
import { TypographyDefaultProps } from './props';

Component({
  props: TypographyDefaultProps,
  data: { phonemodel: '' },
  methods: {
    onTap(e) {
      const disabled = getValueFromProps(this, 'disabled');
      if (disabled) {
        triggerEventOnly(this, 'disabledTap', e);
        return;
      }
      triggerEventOnly(this, 'tap', e);
    },
    catchTap(e) {
      const disabled = getValueFromProps(this, 'disabled');
      if (disabled) {
        triggerEventOnly(this, 'disabledTap', e);
        return;
      }
      triggerCatchEvent(this, 'catchTap', e);
    },
  },
  /// #if ALIPAY
  onInit() {
    const { platform } = my.env;
    this.setData({
      phonemodel: platform,
    });
  },
  /// #endif
  /// #if WECHAT
  attached() {
    // @ts-ignore
    const { platform } = wx.getDeviceInfo();
    let p = '';
    if (platform === 'android') {
      p = 'Android';
    } else {
      p = 'iOS';
    }
    this.setData({
      phonemodel: p,
    });
  },
  /// #endif
});

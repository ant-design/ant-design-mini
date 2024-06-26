import {
  Component,
  triggerEventOnly,
  triggerCatchEvent,
  getValueFromProps,
} from '../_util/simply';
import { TypographyDefaultProps } from './props';

Component(
  TypographyDefaultProps,
  {
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
  { phonemodel: '' },
  null,
  {
    onInit() {
      const { platform } = my.env;
      this.setData({
        phonemodel: platform,
      });
    },
  }
);

import {
  Component,
  getValueFromProps,
  triggerCatchEvent,
  triggerEventOnly,
} from '../_util/simply';
import { TypographyDefaultProps } from './props';

Component(
  TypographyDefaultProps,
  {
    onTap(e) {
      const disabled = getValueFromProps(this, 'disabled');

      console.log(123123);
      if (disabled) {
        console.log(123123);
        triggerEventOnly(this, 'disabledTap', e);
        return;
      }
      triggerEventOnly(this, 'tap', e);
    },
    catchTap(e) {
      const disabled = getValueFromProps(this, 'disabled');
      console.log(33344);
      if (disabled) {
        console.log(3456);
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

import { Component } from '../../_util/simply';
import { FormItemDefaultProps } from './props';

Component({
  props: FormItemDefaultProps,
  /// #if WECHAT
  attached() {
    this.triggerEvent('ref', this);
  },
  /// #endif
});

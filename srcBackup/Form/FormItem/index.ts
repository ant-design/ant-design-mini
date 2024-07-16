import { Component } from '../../_util/simply';
import { FormItemDefaultProps } from './props';

Component(FormItemDefaultProps, null, null, null, {
  /// #if WECHAT
  attached() {
    this.triggerEvent('ref', this);
  },
  /// #endif
});

// @ts-nocheck
import { Component, triggerEvent } from '../_util/simply';
import { WelcomeProps } from './props';

Component(
  WelcomeProps,
  // methods
  {
    onContentTap(e) {
      if (this.props.onTap) {
        triggerEvent(this, 'tap', e);
      }
    },
  },
  // data
  {},
  // mixins
  undefined,
  // 生命周期方法
  {}
);

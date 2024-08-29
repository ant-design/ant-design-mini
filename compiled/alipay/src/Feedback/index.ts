import '../_util/assert-component2';
import { Component } from '../_util/simply';
import { FeedbackDefaultProps } from './props';

Component(
  FeedbackDefaultProps,
  {
    handleVisibleChange() {
      this.setData({ visible: !this.data.visible });
    }
  },
  { 
    visible: false 
  }
);

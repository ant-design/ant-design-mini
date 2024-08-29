import '../_util/assert-component2';
import { getInstanceBoundingClientRect } from '../_util/jsapi/get-instance-bounding-client-rect';
import { Component } from '../_util/simply';
import { FeedbackDefaultProps } from './props';

Component(
  FeedbackDefaultProps,
  {
    getInstance() {
      if (this.$id) {
        return my;
      }
      return this;
    },
    handleVisibleChange(visible) {
      this.setData({ visible });
      this.props.onVisibleChange(visible);
    },
    async onTriggerFirstAppear() {
      const res = getInstanceBoundingClientRect(
        this.getInstance(),
        `#ant-feedback-trigger${this.$id ? `-${this.$id}` : ''}`
      );
      console.log('<<<res', res);
    }
  },
  { 
    visible: false 
  }
);

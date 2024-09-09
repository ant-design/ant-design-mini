import '../_util/assert-component2';
import get from '../_util/get';
import { Component } from '../_util/simply';
import { FeedbackDefaultProps } from './props';

Component(
  FeedbackDefaultProps,
  {
    handleVisibleChange(visible) {
      this.props.onVisibleChange(visible);
    },
    onFeedClick(e) {
      this.props.onFeedClick(get(e, 'currentTarget.dataset.item', {}));
    },
  },
);

import { resolveEventValue } from '../_util/platform';
import { Component, triggerEvent } from '../_util/simply';
import { FeedbackDefaultProps } from './props';

Component(FeedbackDefaultProps, {
  handleVisibleChange(visible, e) {
    triggerEvent(this, 'visibleChange', resolveEventValue(visible), e);
  },
  onTapFeedItem(e) {
    const { item } = e.currentTarget.dataset;
    triggerEvent(this, 'tapFeedItem', item, e);
  },
  maskClick(e) {
    triggerEvent(this, 'visibleChange', true, e);
  },
});

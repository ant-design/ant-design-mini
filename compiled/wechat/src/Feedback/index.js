import { resolveEventValue } from '../_util/platform';
import { Component, triggerEvent } from '../_util/simply';
import { FeedbackDefaultProps } from './props';
Component(FeedbackDefaultProps, {
    handleVisibleChange: function (visible, e) {
        triggerEvent(this, 'visibleChange', resolveEventValue(visible), e);
    },
    onTapFeedItem: function (e) {
        var item = e.currentTarget.dataset.item;
        triggerEvent(this, 'tapFeedItem', item, e);
    },
    maskClick: function (e) {
        triggerEvent(this, 'visibleChange', true, e);
    },
});

import { Component, triggerEventValues } from '../../src/_util/simply';
import { ConversationsProps } from './props';

Component(ConversationsProps, {
  onItemTap(e) {
    const { item, index } = e.currentTarget.dataset;
    triggerEventValues(this, 'itemTap', [item, index], e);
  },
});

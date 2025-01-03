import { Component, triggerEvent } from '../../src/_util/simply';
import { PromptsProps } from './props';

Component(
  PromptsProps,
  {
    onTapPromptsItem(e) {
      const { item } = e.currentTarget.dataset;
      triggerEvent(this, 'tapPromptsItem', item, e);
    },
  }
);

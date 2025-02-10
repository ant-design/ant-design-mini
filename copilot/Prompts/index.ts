// @ts-nocheck
import { Component, triggerEventValues } from '../_util/simply';
import { PromptsProps } from './props';

Component(PromptsProps, {
  onItemTap(e) {
    const { item, index } = e.currentTarget.dataset;
    triggerEventValues(this, 'itemTap', [item, index], e);
  },
});

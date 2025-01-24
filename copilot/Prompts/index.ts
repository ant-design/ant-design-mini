import { Component, triggerEventValues } from '../../src/_util/simply';
import { PromptsProps } from './props';

Component(PromptsProps, {
  onItemTap(e) {
    const { item, index } = e.currentTarget.dataset;
    triggerEventValues(this, 'itemTap', [item, index], e);
  },
});

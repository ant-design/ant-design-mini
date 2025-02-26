// @ts-nocheck
import { Component, triggerEventValues } from '../_util/simply';
import { PromptsProps } from './props';

Component({
  props: PromptsProps,
  methods: {
    onItemTap(e) {
      const { item, index } = e.currentTarget.dataset;
      triggerEventValues(this, 'itemTap', [item, index], e);
    },
  },
});

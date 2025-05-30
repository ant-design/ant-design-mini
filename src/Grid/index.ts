import { Component, IPlatformEvent, triggerEvent } from '../_util/simply';
import { GridFunctionalProps } from './props';

Component({
  props: GridFunctionalProps,
  methods: {
    onTap(e: IPlatformEvent) {
      const { item } = e.currentTarget.dataset;
      triggerEvent(this, 'tap', item);
    },
    onFirstAppear(e: IPlatformEvent) {
      const { item } = e.currentTarget.dataset;
      triggerEvent(this, 'firstAppear', item);
    },
  },
});

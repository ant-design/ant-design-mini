import { Component, IPlatformEvent, triggerEvent } from '../_util/simply';
import { GridFunctionalProps } from './props';

Component(GridFunctionalProps, {
  onTap(e: IPlatformEvent) {
    const { item } = e.target.dataset;
    triggerEvent(this, 'tap', item);
  },
  onFirstAppear(e: IPlatformEvent) {
    const { item } = e.target.dataset;
    triggerEvent(this, 'firstAppear', item);
  }
})
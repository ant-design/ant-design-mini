import { Component, triggerEvent } from '../_util/simply';
import { DefaultProps } from './props';

Component(
  DefaultProps,
  {
    onTapLink(e) {
      const { item } = e.currentTarget.dataset;
      triggerEvent(this, 'linkTap', item, e);
    },
    onTapChip(e) {
      const { item } = e.currentTarget.dataset;
      triggerEvent(this, 'chipTap', item, e);
    },
  },
  {},
  undefined,
  {}
);

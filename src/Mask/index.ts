import { Component, IPlatformEvent, triggerEventOnly } from '../_util/simply';

Component(
  {
    show: true,
  },
  {
    onMaskTap(e: IPlatformEvent) {
      triggerEventOnly(this, 'maskTap', e);
    },
  }
);

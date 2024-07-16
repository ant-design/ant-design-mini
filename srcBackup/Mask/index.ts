import { Component, IPlatformEvent, triggerEventOnly } from '../_util/simply';

Component({
  show: true,
}, {
  onMaskClick(e: IPlatformEvent) {
    triggerEventOnly(this, 'maskTap', e);
  },
})
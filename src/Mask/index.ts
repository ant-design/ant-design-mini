import { Component, IPlatformEvent, triggerEventOnly } from '../_util/simply';

Component({
  props: {
    show: true,
  },
  methods: {
    onMaskTap(e: IPlatformEvent) {
      triggerEventOnly(this, 'maskTap', e);
    },
  },
});

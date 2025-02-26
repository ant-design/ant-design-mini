import {
  Component,
  IPlatformEvent,
  triggerEventOnly,
  triggerEventValues,
} from '../_util/simply';
import { ActionSheetDefaultProps, IActionItem } from './props';

Component({
  props: ActionSheetDefaultProps,
  methods: {
    onAction(e: IPlatformEvent) {
      const { item, index } = e.currentTarget.dataset as {
        item: IActionItem;
        index: number;
      };
      if (item?.disabled) return;

      triggerEventOnly(this, 'close', e);
      triggerEventValues(this, 'action', [item, index], e);
    },
    onClose(e: IPlatformEvent) {
      triggerEventOnly(this, 'close', e);
    },
  },
});

import {
  Component,
  triggerEventOnly,
  triggerCatchEvent,
} from '../../_util/simply';
import { IListItemProps } from './props';

Component<IListItemProps>(
  {
    image: '',
    title: '',
    brief: '',
    arrow: false,
    extra: '',
    extraBrief: '',
    disabled: false,
    showDivider: true,
  },
  {
    onTap(e) {
      if (this.props.disabled) {
        return;
      }
      triggerEventOnly(this, 'tap', e);
    },
    catchTap(e) {
      if (this.props.disabled) {
        return;
      }
      triggerCatchEvent(this, 'catchTap', e);
    },
  }
);

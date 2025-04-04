import {
  Component,
  triggerCatchEvent,
  triggerEventOnly,
} from '../../_util/simply';
import { IListItemProps } from './props';

Component<IListItemProps>({
  props: {
    image: '',
    title: '',
    brief: '',
    arrow: false,
    extra: '',
    extraBrief: '',
    disabled: false,
    showDivider: true,
  },
  methods: {
    /// #if ALIPAY || BUNDLE2H
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
    /// #endif
  },
});

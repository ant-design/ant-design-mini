import { TagDefaultProps } from './props';
import '../_util/assert-component2';

Component({
  /// #if WECHAT
  properties: {
    type: {
      value: 'fill',
      type: String,
    },
    color: {
      value: 'primary',
      type: String,
    },
    icon: {
      type: String,
    },
    style: {
      type: String,
    },
    className: {
      type: String,
    },
  },
  options: {
    styleIsolation: 'shared',
  } as unknown,
  /// #endif
  props: TagDefaultProps,
});

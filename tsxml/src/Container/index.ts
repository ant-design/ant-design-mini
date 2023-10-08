import { ContainerDefaultProps } from './props';
import '../_util/assert-component2';

Component({
  /// #if WECHAT
  properties: {
    title: {
      type: String,
    },
    className: {
      type: String,
    },
    style: {
      type: String,
    },
    headerInBox: {
      value: true,
      type: Boolean,
    },
  },
  options: {
    //@ts-ignore
    multipleSlots: true,
    styleIsolation: 'apply-shared',
  },
  /// #endif

  props: ContainerDefaultProps,
});

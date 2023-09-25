import { ContainerDefaultProps } from './props';

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
  },
  /// #endif

  props: ContainerDefaultProps,
});

import '../_util/assert-component2';
import { ConfigProviderProps } from './props';

Component({
  /// #if WECHAT
  properties: {
    className: {
      type: String,
    },
    style: {
      type: String,
    },
  },
  options: {
    //@ts-ignore
    multipleSlots: true,
    styleIsolation: 'shared',
  },
  /// #endif

  props: ConfigProviderProps,
});

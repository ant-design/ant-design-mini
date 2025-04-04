import { IconDefaultProps } from './props';
import fmtEvent from '../_util/fmtEvent';
import '../_util/assert-component2';

Component({
  /// #if WECHAT
  properties: {
    type: {
      value: '',
      type: String,
    },
    color: {
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
    //@ts-ignore
    styleIsolation: 'shared',
  },
  /// #endif

  /// #if ALIPAY || BUNDLE2H
  props: IconDefaultProps,
  methods: {
    onTap(e) {
      if (this.props.onTap) {
        this.props.onTap(fmtEvent(this.props, e));
      }
    },
    catchTap(e) {
      if (this.props.catchTap) {
        this.props.catchTap(fmtEvent(this.props, e));
      }
    },
  },
  /// #endif
});

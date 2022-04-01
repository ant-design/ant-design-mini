import { CardDefaultProps } from './props';
import fmtEvent from '../_util/fmtEvent';
import { log } from '../_util/console';

Component({
  props: CardDefaultProps,
  didMount() {
    const { onIconTap, icon } = this.props;
    if (!icon && onIconTap) {
      log.error('Card', '未设置 icon 属性值或者值为空，onIconTap 将无效。');
    }
  },
  methods: {
    onIconTap(e) {
      const { onIconTap } = this.props;
      if (onIconTap) {
        const event = fmtEvent(this.props, e);
        return onIconTap(event);
      }
    },
  },
});

import { IconDefaultProps } from './props';
import fmtEvent from '../_util/fmtEvent';

Component({
  props: IconDefaultProps,
  methods: {
    onTap(e) {
      const { onTap } = this.props;
      if (onTap) {
        const event = fmtEvent(this.props, e);
        return onTap(event);
      }
    },
  },
});

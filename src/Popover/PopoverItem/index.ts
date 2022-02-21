import { PopoverItemDefaultProps } from './props';
import fmtEvent from '../../_util/fmtEvent';

Component({
  props: PopoverItemDefaultProps,
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

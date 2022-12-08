import { ListItemDefaultProps } from './props';
import fmtEvent from '../../_util/fmtEvent';

Component({
  props: ListItemDefaultProps,
  methods: {
    onTap(e) {
      if (this.props.disabled) return;
      const { onTap } = this.props;
      if (onTap) {
        const event = fmtEvent(this.props, e);
        onTap(event);
      }
    },
    catchTap(e) {
      if (this.props.disabled) return;
      const { catchTap } = this.props;
      if (catchTap) {
        const event = fmtEvent(this.props, e);
        catchTap(event);
      }
    },
  },
});

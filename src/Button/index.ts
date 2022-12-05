import { ButtonDefaultProps } from './props';
import fmtEvent from '../_util/fmtEvent';

Component({
  props: ButtonDefaultProps,
  methods: {
    onTap(e) {
      const { onTap, disabled, loading } = this.props;
      if (onTap && !disabled && !loading) {
        const event = fmtEvent(this.props, e);
        return onTap(event);
      }
    },
    catchTap(e) {
      const { catchTap, disabled, loading } = this.props;
      if (catchTap && !disabled && !loading) {
        const event = fmtEvent(this.props, e);
        return catchTap(event);
      }
    }
  },
});

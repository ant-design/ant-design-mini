import { ButtonDefaultProps } from './props';
import fmtEvent from '../_util/fmtEvent';

Component({
  props: ButtonDefaultProps,
  methods: {
    onTap(e) {
      const { onTap, disabled, loading, onMonitor } = this.props;
      if (onTap && !disabled && !loading) {
        const event = fmtEvent(this.props, e);
        onMonitor && onMonitor({
          type: 'click',
        });
        onTap(event);
      }
    },
    catchTap(e) {
      const { catchTap, disabled, loading, onMonitor } = this.props;
      if (catchTap && !disabled && !loading) {
        const event = fmtEvent(this.props, e);
        onMonitor && onMonitor({
          type: 'click',
        });
        catchTap(event);
      }
    },
    onDisappear() {
      if (this.props.onMonitor) {
        this.props.onMonitor({
          type: 'onDisappear',
        });
      }
    },
    onFirstAppear() {
      if (this.props.onMonitor) {
        this.props.onMonitor({
          type: 'onFirstAppear',
        });
      }
    },
  },
});

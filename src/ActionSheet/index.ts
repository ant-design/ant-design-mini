import { ActionSheetDefaultProps } from './props';
import fmtEvent from '../_util/fmtEvent'

Component({
  props: ActionSheetDefaultProps,
  methods: {
    onAction(e) {
      const { item, index } = e.target.dataset;
      if (item.disabled) return;
      const { onClose, onAction } = this.props;
      const event = fmtEvent(this.props, e );
      onClose?.(event);
      onAction?.(item, index, event)
    },
    onClose(e) {
      const { onClose } = this.props
      const event = fmtEvent(this.props, e );
      onClose?.(event)
    }
  }
});

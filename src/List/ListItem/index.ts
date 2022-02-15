import { ListItemDefaultProps } from './props';
import fmtEvent from '../../_util/fmtEvent';

Component({
  props: ListItemDefaultProps,
  data: {
    imageSize: '',
    hide: false,
  },
  methods: {
    onTap(e) {
      if (this.props.disabled) return;
      const { onTap } = this.props;
      if (onTap) {
        const event = fmtEvent(this.props, e);
        return onTap(event);
      }
    },
  },
  didMount() {
    this.setData({
      imageSize: this.props.imageSize,
    });
  },
});

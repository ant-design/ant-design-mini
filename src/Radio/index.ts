import { RadioItemDefaultProps } from './props';
import fmtEvent from '../_util/fmtEvent';

Component({
  props: RadioItemDefaultProps,
  data: {
    selfChecked: undefined,
  },
  methods: {
    onChange(e) {
      const value = e.detail.value;
      if (!('checked' in this.props)) {
        this.setData({
          selfChecked: value,
        });
      }
      if (this.props.onChange) {
        this.props.onChange(value, fmtEvent(this.props, e));
      }
    }
  }
});

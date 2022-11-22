import { CheckboxDefaultProps } from './props';
import fmtEvent from '../_util/fmtEvent';

Component({
  props: CheckboxDefaultProps,
  data: {
    selfChecked: undefined,
  },
  methods: {
    onChange(e) {
      const value = e.detail.value;
      if (typeof this.props.checked === 'undefined') {
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

import { InputDefaultProps } from './props';
import fmtEvent from '../_util/fmtEvent';

Component({
  props: InputDefaultProps,
  data: {
    selfValue: undefined,
    selfFocus: undefined,
  },
  methods: {
    onChange(e) {
      const value = e.detail.value;
      this.setData({
        selfValue: value,
      });
      if (this.props.onChange) {
        this.props.onChange(value, fmtEvent(e));
      }
    },
    onFocus(e) {
      this.setData({
        selfFocus: true,
      });
      if (this.props.onFocus) {
        this.props.onFocus(fmtEvent(this.props, e));
      }
    },
    onBlur(e) {
      this.setData({
        selfFocus: false,
      });
      if (this.props.onBlur) {
        this.props.onBlur(fmtEvent(this.props, e));
      }
    },
    onClear(e) {
      this.setData({
        selfValue: '',
      });
      if (this.props.onClear) {
        this.props.onClear(fmtEvent(this.props, e));
      }
    }
  }
});


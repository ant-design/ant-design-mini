import { InputDefaultProps } from './props';
import fmtEvent from '../_util/fmtEvent';
import mixinValue from '../mixins/value';

Component({
  props: InputDefaultProps,
  mixins: [mixinValue()],
  data: {
    selfFocus: false,
  },
  methods: {
    onChange(e) {
      const value = e.detail.value;
      if (!this.isControlled()) {
        this.update(value);
      }
      if (this.props.onChange) {
        this.props.onChange(value, fmtEvent(this.props, e));
      }
    },
    onFocus(e) {
      const value = e.detail.value;
      this.setData({
        selfFocus: true,
      });
      if (this.props.onFocus) {
        this.props.onFocus(value, fmtEvent(this.props, e));
      }
    },
    onBlur(e) {
      const value = e.detail.value;
      this.setData({
        selfFocus: false,
      });
      if (this.props.onBlur) {
        this.props.onBlur(value, fmtEvent(this.props, e));
      }
    },
    onConfirm(e) {
      const value = e.detail.value;
      if (this.props.onConfirm) {
        this.props.onConfirm(value, fmtEvent(this.props, e));
      }
    },
    onClear(e) {
      if (!this.isControlled()) {
        this.update('');
      }
      if (this.props.onChange) {
        this.props.onChange('', fmtEvent(this.props, e));
      }
    },
  }
});


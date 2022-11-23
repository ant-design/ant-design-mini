import { InputDefaultProps } from './props';
import fmtEvent from '../_util/fmtEvent';

Component({
  props: InputDefaultProps,
  data: {
    selfValue: undefined,
    selfFocus: undefined,
  },
  ref() {
    return {
      focus: () => {
        this.setData({
          selfFocus: true,
        });
      },
      blur: () => {
        this.setData({
          selfFocus: false,
        });
      },
    }
  },
  methods: {
    onChange(e) {
      const value = e.detail.value;
      if (!('value' in this.props)) {
        this.setData({
          selfValue: value,
        });
      }
      if (this.props.onChange) {
        this.props.onChange(value, fmtEvent(this.props, e));
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
    onConfirm(e) {
      if (this.props.onConfirm) {
        this.props.onConfirm(fmtEvent(this.props, e));
      }
    },
    onClear(e) {
      this.setData({
        selfValue: '',
      });
      if (this.props.onClear) {
        this.props.onClear(fmtEvent(this.props, e));
      }
    },
    onTap() {
      this.setData({
        selfFocus: true,
      });
    },
  }
});


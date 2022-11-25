import { InputDefaultProps } from './props';
import fmtEvent from '../_util/fmtEvent';

Component({
  props: InputDefaultProps,
  data: {
    obj: {
      value: undefined,
    },
    selfFocus: false,
    valueInProps: false,
  },
  didMount() {
    this.setData({
      valueInProps: 'value' in this.props,
    });
  },
  methods: {
    onChange(value, e) {
      if (!('value' in this.props)) {
        this.setData({
          obj: {
            value,
          },
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
        obj: {
          value: undefined,
        },
      });
      if (this.props.onClear) {
        this.props.onClear(fmtEvent(this.props, e));
      }
    },
  }
});


import { InputDefaultProps } from './props';
import fmtEvent from '../_util/fmtEvent';

Component({
  props: InputDefaultProps,
  data: {
    selfValue: undefined,
    selfFocus: false,
    controlled: false,
  },
  onInit() {
    this.setControlled = true;
    this.setData({
      controlled: 'value' in this.props,
    });
  },
  didMount() {
    if (this.setControlled) {
      return;
    }
    this.setData({
      controlled: 'value' in this.props,
    });
  },
  setControlled: false,
  methods: {
    onChange(value, e) {
      if (!this.data.controlled) {
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
      if (this.props.onChange) {
        this.props.onChange('', fmtEvent(this.props, e));
      }
    },
  }
});


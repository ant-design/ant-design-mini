import { InputBaseDefaultProps } from './props';
import fmtEvent from '../../_util/fmtEvent';


Component({
  props: InputBaseDefaultProps,
  data: {
    obj: {
      value: undefined,
    },
  },
  didUpdate(prevProps, prevData) {
    if (prevProps.value !== this.props.value) {
      if (this.focus) {
        return;
      }
      this.setSelfValue(this.props.value);
    }
  },
  didMount() {
    this.setSelfValue(typeof this.props.value === 'undefined' ?  this.props.defaultValue : this.props.value);
  },
  methods: {
    focus: false,
    setSelfValue(value) {
      this.setData({
        obj: {
          value, 
        },
      });
    },
    onChange(e) {
      const value = e.detail.value;
      this.setSelfValue(value);
      if (this.props.onChange) {
        this.props.onChange(value, fmtEvent(this.props, e));
      }
    },
    onFocus(e) {
      this.focus = true;
      if (this.props.onFocus) {
        this.props.onFocus(fmtEvent(this.props, e));
      }
    },
    onBlur(e) {
      this.focus = false;
      if ('value' in this.props) {
        this.setSelfValue(this.props.value);
      }
      if (this.props.onBlur) {
        this.props.onBlur(fmtEvent(this.props, e));
      }
    },
    onConfirm(e) {
      if (this.props.onConfirm) {
        this.props.onConfirm(fmtEvent(this.props, e));
      }
    },
  }
});


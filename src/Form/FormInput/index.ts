import { FormInputDefaultProps } from './props';
import createComponent from '../createComponent';
import fmtEvent from '../../_util/fmtEvent';

createComponent({
  props: FormInputDefaultProps,
  methods: {
    onChange(value, e) {
      this.emit('onChange', value);
      if (this.props.onChange) {
        this.props.onChange(value, fmtEvent(this.props, e));
      }
    },
    onBlur(value, e) {
      if (this.props.onBlur) {
        this.props.onBlur(value, fmtEvent(this.props, e));
      }
    },
    onFocus(value, e) {
      if (this.props.onChange) {
        this.props.onFocus(value, fmtEvent(this.props, e));
      }
    },
    onConfirm(value, e) {
      if (this.props.onConfirm) {
        this.props.onConfirm(value, fmtEvent(this.props, e));
      }
    },
    onClear(value, e) {
      this.emit('onChange', '');
      if (this.props.onChange) {
        this.props.onChange(value, fmtEvent(this.props, e));
      }
    },
  }
});


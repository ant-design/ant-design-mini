import { FormStepperDefaultProps } from './props';
import createComponent from '../createComponent';
import fmtEvent from '../../_util/fmtEvent';

createComponent({
  props: FormStepperDefaultProps,
  initialValue: 0,
  methods: {
    onChange(value, e) {
      this.emit('onChange', value);
      if (this.props.onChange) {
        this.props.onChange(value, fmtEvent(this.props, e));
      }
    },
    onBlur(e) {
      if (this.props.onBlur) {
        this.props.onBlur(fmtEvent(this.props, e));
      }
    },
    onFocus(e) {
      if (this.props.onChange) {
        this.props.onFocus(fmtEvent(this.props, e));
      }
    },
    onConfirm(e) {
      if (this.props.onConfirm) {
        this.props.onConfirm(fmtEvent(this.props, e));
      }
    },
  }
});

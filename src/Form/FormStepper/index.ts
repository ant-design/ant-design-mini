import { FormStepperDefaultProps } from './props';
import createComponent from '../createComponent';

createComponent({
  props: FormStepperDefaultProps,
  initialValue: 0,
  methods: {
    onChange(value, e) {
      this.emit('onChange', value);
      if (this.props.onChange) {
        this.props.onChange(value, e);
      }
    },
    onBlur(e) {
      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
    },
    onFocus(e) {
      if (this.props.onChange) {
        this.props.onFocus(e);
      }
    },
    onConfirm(e) {
      if (this.props.onConfirm) {
        this.props.onConfirm(e);
      }
    },
  }
});

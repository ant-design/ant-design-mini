import { FormStepperDefaultProps } from './props';
import createComponent from '../createComponent';

createComponent({
  props: FormStepperDefaultProps,
  initialValue: 0,
  methods: {
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

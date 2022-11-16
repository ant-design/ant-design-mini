import { FormInputDefaultProps } from './props';
import createComponent from '../createComponent';

createComponent({
  props: FormInputDefaultProps,
  initialValue: '',
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
    onClear(e) {
      this.emit('onChange', '');
      if (this.props.onClear) {
        this.props.onClear(e);
      }
    },
  }
});

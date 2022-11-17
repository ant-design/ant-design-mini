import { FormSwitchDefaultProps } from './props';
import createComponent from '../createComponent';

createComponent({
  props: FormSwitchDefaultProps,
  initialValue: false,
  methods: {
    onChange(value, e) {
      this.emit('onChange', value);
      if (this.props.onChange) {
        this.props.onChange(value, e);
      }
    },
  }
});

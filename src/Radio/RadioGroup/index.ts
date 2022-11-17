import { RadioGroupDefaultProps } from './props';
import fmtEvent from '../../_util/fmtEvent';


Component({
  props: RadioGroupDefaultProps,
  data: {
    selfValue: undefined,
  },
  methods: {
    onChange(_, e) {
      if (this.props.disabled) {
        return;
      }
      const index = e.currentTarget.dataset.index;
      const value = this.props.options[index].value;
      if (typeof this.props.value === 'undefined') {  
        this.setData({
          selfValue: value,
        });
      }
      if (this.props.onChange) {
        this.props.onChange(value, fmtEvent(this.props, e));
      }
    }
  },
});

import { RadioGroupDefaultProps } from './props';
import fmtEvent from '../../_util/fmtEvent';


Component({
  props: RadioGroupDefaultProps,
  data: {
    selfValue: undefined,
  },
  methods: {
    onChange(_, e) {
      const index = e.currentTarget.dataset.index;
      const value = this.props.options[index].value;
      if (!('value' in this.props)) {  
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

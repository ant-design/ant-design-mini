import { CheckboxGroupDefaultProps } from './props';
import fmtEvent from '../../_util/fmtEvent';

Component({
  props: CheckboxGroupDefaultProps,
  data: {
    selfValue: undefined,
  },
  methods: {
    onChange(_, e) {
      if (this.props.disabled) {
        return;
      }
      let { currentValue } = e.currentTarget.dataset;
      const { index } = e.currentTarget.dataset;
      const value = this.props.options[index].value;
      if (currentValue.indexOf(value) > -1) {
        currentValue = currentValue.filter((v) => v !== value);
      } else {
        currentValue = [...currentValue, value];
      }
      if (typeof this.props.value === 'undefined') {
        this.setData({
          selfValue: currentValue,
        });
      }
      if (this.props.onChange) {
        this.props.onChange(currentValue, fmtEvent(this.props, e));
      }
    },
  },
});

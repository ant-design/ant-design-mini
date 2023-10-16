import { CheckboxGroupDefaultProps } from './props';
import fmtEvent from '../../_util/fmtEvent';
import mixinValue from '../../mixins/value';

Component({
  props: CheckboxGroupDefaultProps,
  mixins: [
    mixinValue({
      transformValue(val) {
        const value = val || [];
        return {
          needUpdate: true,
          value,
        };
      },
    }),
  ],
  methods: {
    onChange(_, e) {
      if (this.props.disabled) {
        return;
      }
      let currentValue = this.getValue();
      const { index } = e.currentTarget.dataset;
      const value = this.props.options[index].value;
      if (currentValue.indexOf(value) > -1) {
        currentValue = currentValue.filter((v) => v !== value);
      } else {
        currentValue = [...currentValue, value];
      }
      if (!this.isControlled()) {
        this.update(currentValue);
      }
      if (this.props.onChange) {
        this.props.onChange(currentValue, fmtEvent(this.props, e));
      }
    },
  },
});

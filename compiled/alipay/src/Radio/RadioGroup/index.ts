import { RadioGroupDefaultProps } from './props';
import fmtEvent from '../../_util/fmtEvent';
import mixinValue from '../../mixins/value';

Component({
  props: RadioGroupDefaultProps,
  mixins: [mixinValue()],
  methods: {
    onChange(_, e) {
      const index = e.currentTarget.dataset.index;
      const value = this.props.options[index].value;
      if (!this.isControlled()) {
        this.update(value);
      }
      if (this.props.onChange) {
        this.props.onChange(value, fmtEvent(this.props, e));
      }
    }
  },
});

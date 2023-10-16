import { RadioDefaultProps } from './props';
import fmtEvent from '../_util/fmtEvent';
import mixinValue from '../mixins/value';
import '../_util/assert-component2';

Component({
  props: RadioDefaultProps,
  mixins: [
    mixinValue({
      valueKey: 'checked',
      defaultValueKey: 'defaultChecked',
    }),
  ],
  methods: {
    onChange(e) {
      const value = e.detail.value;
      if (!this.isControlled()) {
        this.update(value);
      }
      if (this.props.onChange) {
        this.props.onChange(value, fmtEvent(this.props, e));
      }
    },
  },
});

import { DropdownDefaultProps } from './props';
import mixinValue from '../mixins/value';

Component({
  props: DropdownDefaultProps,
  mixins: [
    mixinValue({
      valueKey: 'current',
      defaultValueKey: 'defaultCurrent',
    }),
  ],
  methods: {
    onTapItem(e) {
      const { index } = e.target.dataset;
      const current = this.getValue();
      let value = index;
      if (current === index) {
        value = -1;
      }
      if (!this.isControlled()) {
        this.update(value);
      }
      if (this.props.onChange) {
        this.props.onChange(value);
      }
    },
  },
});

import { CheckboxItemDefaultProps } from './props';

Component({
  props: CheckboxItemDefaultProps,
  methods: {
    onChange(value) {
      const { onChange } = this.props;
      if (onChange) {
        onChange(value);
      }
    },
  },
});

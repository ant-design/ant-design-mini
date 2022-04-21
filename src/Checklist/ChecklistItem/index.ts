import equal from 'fast-deep-equal';
import { ChecklistItemDefaultProps } from './props';

Component({
  props: ChecklistItemDefaultProps,
  data: {
    checked: false
  },
  deriveDataFromProps(nextProps) {
    const { value, optionValue } = nextProps;
    if (equal(this.props.value, value)) return;

    this.setData({
      checked: value.indexOf(optionValue) !== -1 ? true : false
    });
  },
  methods: {
    onChecklistItemClick() {
      const { checked } = this.data;
      const { onChange } = this.props;
      this.setData({
        checked: !checked
      });
      onChange && onChange.call(this.props, this.getValues(!checked));
    },
    getValues(checked) {
      const { optionValue, value, multiple } = this.props;
      if (!multiple) {
        return [optionValue];
      }
      if (checked && !value.includes(optionValue)) {
        return value.concat([optionValue]);
      } else {
        return value.filter(item => item !== optionValue);
      }
    }
  },
});

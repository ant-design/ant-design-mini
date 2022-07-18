import equal from 'fast-deep-equal';
import { ChecklistItemDefaultProps } from './props';

Component({
  props: ChecklistItemDefaultProps,

  data: {
    checked: false
  },

  didMount() {
    const checked = this.getChecked()
    this.setData({
      checked
    });
  },

  didUpdate(prevProps) {
    const { value, item, multiple } = prevProps;
    if (equal(this.props.value, value) &&
      equal(this.props.item, item) &&
      equal(this.props.multiple, multiple)) return;
    const checked = this.getChecked()
    this.setData({
      checked
    });
  },

  methods: {
    onChecklistItemClick() {
      const { checked } = this.data;
      const { onChange } = this.props;
      this.setData({
        checked: !checked
      });
      const value = this.getValues(!checked)
      onChange && onChange.call(this.props, value);
    },

    getChecked() {
      const { multiple, item, value } = this.props;
      if (!multiple) {
        return value === item.value
      }
      let valueArr = []
      if (!Array.isArray(value)) {
        valueArr = [value]
      } else {
        valueArr  = value.slice()
      }
      return valueArr.indexOf(item.value) > -1
    },
  
    getValues(checked) {
      const {  multiple, item, value } = this.props;
      if (!multiple) {
        return checked ? item.value : '';
      }
      let valueArr = value
      if (!Array.isArray(value)) {
        valueArr = [value]
      } else {
        valueArr  = value.slice()
      }
      if (checked && valueArr.indexOf(item.value) === -1) {
        return valueArr.concat([item.value]);
      } else {
        return valueArr.filter(v => v !== item.value);
      }
    }
  },
});

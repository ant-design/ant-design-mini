import { ChecklistDefaultProps } from './props';

Component({
  props: ChecklistDefaultProps,
  data: {
    value: []
  },
  didMount() {
    const { defaultValue } = this.props;
    this.setData({
      value: defaultValue
    });
  },
  methods: {
    onChange(v) {
      const { onChange } = this.props;
      this.setData({
        value: v
      });
      onChange && onChange.call(this.props, v);
    }
  },
});

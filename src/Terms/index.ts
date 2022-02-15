import { TermsDefaultProps } from './props';

Component({
  props: TermsDefaultProps,
  data: {
    disabled: false,
  },
  didMount() {
    this.updateDisabled(false);
  },
  methods: {
    updateDisabled(v) {
      if (this.props.hasCheckbox) {
        this.setData({
          disabled: !v,
        });
      }
    },
    onChange(v) {
      const { onChange, _getCurrentField } = this.props;
      this.updateDisabled(v);
      if (onChange) {
        if (_getCurrentField) {
          return onChange.call(this.props, v);
        } else {
          return onChange(v);
        }
      }
    },
    onMainBtnTap() {
      if (typeof this.props.onMainBtnTap === 'function') {
        this.props.onMainBtnTap();
      }
    },
    onSubBtnTap() {
      if (typeof this.props.onSubBtnTap === 'function') {
        this.props.onSubBtnTap();
      }
    },
  },
});

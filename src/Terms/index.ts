import { TermsDefaultProps } from './props';
import  fmtEvent from '../_util/fmtEvent';

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
        const event = fmtEvent(this.props);
        if (_getCurrentField) {
          return onChange.call(this.props, v, event);
        } else {
          return onChange(v, event);
        }
      }
    },
    onMainBtnTap() {
      if (typeof this.props.onMainBtnTap === 'function') {
        this.props.onMainBtnTap(fmtEvent(this.props));
      }
    },
    onSubBtnTap() {
      if (typeof this.props.onSubBtnTap === 'function') {
        this.props.onSubBtnTap(fmtEvent(this.props));
      }
    },
  },
});

import { RadioDefaultProps } from './props';
import fmtEvent from '../_util/fmtEvent';

Component({
  props: RadioDefaultProps,
  data: {
    selfChecked: undefined,
    hasChange: false,
    checkedInProps: undefined,
  },
  onInit() {
    this.setCheckedInProps();
  },
  didMount() {
    this.setCheckedInProps();
  },
  methods: {
    setCheckedInProps() {
      if (typeof this.data.checkedInProps !== 'undefined') {
        return;
      }
      this.setData({
        checkedInProps: 'checked' in this.props,
      });
    },
    setChange() {
      if (this.data.hasChange) {
        return;
      }
      this.setData({
        hasChange: true,
      });
    },
    onChange(e) {
      const value = e.detail.value;
      this.setChange();
      if (!this.data.checkedInProps) {
        this.setData({
          selfChecked: value,
        });
      }
      if (this.props.onChange) {
        this.props.onChange(value, fmtEvent(this.props, e));
      }
    }
  }
});

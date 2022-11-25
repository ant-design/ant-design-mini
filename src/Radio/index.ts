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
    onChange(e) {
      const value = e.detail.value;
      if ('checked' in this.props) {
        this.setData({
          hasChange: true,
        });
      } else {
        this.setData({
          selfChecked: value,
          hasChange: true,
        });
      }
      if (this.props.onChange) {
        this.props.onChange(value, fmtEvent(this.props, e));
      }
    }
  }
});

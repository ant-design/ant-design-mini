import { SwitchDefaultProps } from './props';
import fmtEvent from '../_util/fmtEvent';
import { getValue } from '../_util/getValue';

Component({
  props: SwitchDefaultProps,
  data: {
    selfChecked: undefined,
    hasChange: false,
    checkedInProps: undefined,
  },
  onInit() {
    this.setCheckedInProps();
  },
  deriveDataFromProps(nextProps) {
    if (nextProps.checked !== this.props.checked) {
      this.setChange();
    }
  },
  didUpdate(prevProps) {
    if (prevProps.checked !== this.props.checked) {
      this.setChange();
    }
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
      if (!this.data.hasChange) {
        this.setData({
          hasChange: true,
        });
      }
    },
    onChange(e) {
      const value = !getValue(this.data.checkedInProps, this.data.hasChange, this.props.checked, this.data.selfChecked, this.props.defaultChecked);
      if (!this.data.checkedInProps) {
        this.setData({
          selfChecked: value,
        });
        this.setChange();
      }
      if (this.props.onChange) {
        this.props.onChange(value, fmtEvent(this.props, e));
      }
    }
  }
});

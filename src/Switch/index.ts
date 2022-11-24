import { SwitchDefaultProps } from './props';
import  fmtEvent from '../_util/fmtEvent';


Component({
  props: SwitchDefaultProps,
  data: {
    selfChecked: undefined,
  },
  methods: {
    onChange(e) {
      if (this.props.disabled) {
        return;
      }
      let checked: boolean;
      if ('checked' in this.props) {
        checked = !this.props.checked;
      } else {
        checked = !(typeof this.data.selfChecked !== 'undefined' ? this.data.selfChecked : this.props.defaultChecked);
        this.setData({
          selfChecked: checked,
        });
      }
      if (this.props.onChange) {
        this.props.onChange(checked,  fmtEvent(this.props, e));
      }
    },
  },
});

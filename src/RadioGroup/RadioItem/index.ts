import { RadioItemDefaultProps } from './props';
import { componentContext, componentDisabled, componentValue } from '../context';

Component({
  props: RadioItemDefaultProps,
  data: {
    _checked: false,
    _disabled: false,
  },
  didMount() {
    componentDisabled.onUpdate(this.props.uid,
      (this.disabledListener = (d) => {
        this.setData({
          _disabled: this.props.disabled || d,
        });
      }));
    componentValue.onUpdate(this.props.uid,
      (this.checkedListener = (v) => {
        if (v) {
          if (v.indexOf(this.props.value) !== -1) {
            this.setData({
              _checked: true,
            });
          } else {
            this.setData({
              _checked: false,
            });
          }
        }
      }));
  },
  didUnmount() {
    componentValue.offUpdate(this.props.uid, this.checkedListener);
    componentDisabled.offUpdate(this.props.uid, this.disabledListener);
  },
  methods: {
    onItemChange(v) {
      const { value } = v.detail;
      if (value) {
        componentContext.update(this.props.uid, this.props.value);
      }
    },
  },
});

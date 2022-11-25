import { RadioGroupDefaultProps } from './props';
import fmtEvent from '../../_util/fmtEvent';


Component({
  props: RadioGroupDefaultProps,
  data: {
    selfValue: undefined,
    hasChange: false,
    valueInProps: undefined,
  },
  onInit() {
    this.setValueInProps();
  },
  didMount() {
    this.setValueInProps();
  },
  methods: {
    setValueInProps() {
      if (typeof this.data.valueInProps !== 'undefined') {
        return;
      }
      this.setData({
        valueInProps: 'value' in this.props,
      });
    },
    onChange(_, e) {
      const index = e.currentTarget.dataset.index;
      const value = this.props.options[index].value;
      if ('value' in this.props) {  
        this.setData({
          hasChange: true,
        });
      } else {
        this.setData({
          hasChange: true,
          selfValue: value,
        });
      }
      if (this.props.onChange) {
        this.props.onChange(value, fmtEvent(this.props, e));
      }
    }
  },
});

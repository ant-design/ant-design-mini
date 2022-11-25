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
    setChange() {
      if (this.data.hasChange) {
        return;
      }
      this.setData({
        hasChange: true,
      });
    },
    onChange(_, e) {
      const index = e.currentTarget.dataset.index;
      const value = this.props.options[index].value;
      this.setChange();
      if (!this.data.valueInProps) {  
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

import { FormCascaderPickerDefaultProps } from './props';
import createComponent from '../../createComponent';
import fmtEvent from '../../../_util/fmtEvent';

createComponent({
  props: FormCascaderPickerDefaultProps,
  initialValue: null,
  methods: {
    onOk(value, option, e) {
      this.emit('onChange', value);
      if (this.props.onOk) {
        this.props.onOk(value, option, fmtEvent(this.props, e));
      }
    },
    onPickerChange(value, option, e) {
      if (this.props.onPickerChange) {
        this.props.onPickerChange(value, option, fmtEvent(this.props, e));
      }
    },
    onTriggerPicker(visible, e) {
      if (this.props.onTriggerPicker) {
        this.props.onTriggerPicker(visible, fmtEvent(this.props, e));
      }
    },
    onFormat(value, option) {
      if (this.props.onFormat) {
        return this.props.onFormat(value, option);
      }
    },
  },
});

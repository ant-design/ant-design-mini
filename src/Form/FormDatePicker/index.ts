import { FormDatePickerDefaultProps } from './props';
import createComponent from '../createComponent';
import fmtEvent from '../../_util/fmtEvent';

createComponent({
  props: FormDatePickerDefaultProps,
  initialValue: '',
  methods: {
    onOk(date, dateStr, e) {
      this.emit('onChange', date);
      if (this.props.onOk) {
        this.props.onOk(date, dateStr, fmtEvent(this.props, e));
      }
    },
    onPickerChange(date, dateStr, e) {
      if (this.props.onPickerChange) {
        this.props.onPickerChange(date, dateStr, fmtEvent(this.props, e));
      }
    },
    onTriggerPicker(visible, e) {
      if (this.props.onTriggerPicker) {
        this.props.onTriggerPicker(visible, fmtEvent(this.props, e));
      }
    },
    onFormat(date, dateStr) {
      if (this.props.onFormat) {
        return this.props.onFormat(date, dateStr);
      }
    },
  },
});

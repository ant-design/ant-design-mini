import { FormPickerDefaultProps } from './props';
import createComponent from '../createComponent';
import fmtEvent from '../../_util/fmtEvent';

createComponent({
  props: FormPickerDefaultProps,
  methods: {
    onOk(value, column, e) {
      this.emit('onChange', value);
      if (this.props.onOk) {
        this.props.onOk(value, column, fmtEvent(this.props, e));
      }
    },
    onChange(value, column, e) {
      if (this.props.onChange) {
        this.props.onChange(value, column, fmtEvent(this.props, e));
      }
    },
    onVisibleChange(visible, e) {
      if (this.props.onVisibleChange) {
        this.props.onVisibleChange(visible, fmtEvent(this.props, e));
      }
    },
    onFormat(value, column) {
      if (this.props.onFormat) {
        return this.props.onFormat(value, column);
      }
    },
    onDismissPicker(e) {
      if (this.props.onCancel) {
        this.props.onCancel(fmtEvent(this.props, e));
      }
    },
  },
});

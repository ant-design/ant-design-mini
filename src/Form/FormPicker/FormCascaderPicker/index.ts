import { FormCascaderPickerDefaultProps } from './props';
import createComponent from '../../createComponent';
import fmtEvent from '../../../_util/fmtEvent';

createComponent({
  props: FormCascaderPickerDefaultProps,
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
    onVisibleChange(visible, e) {
      if (this.props.onVisibleChange) {
        this.props.onVisibleChange(visible, fmtEvent(this.props, e));
      }
    },
    onFormat(value, option) {
      if (this.props.onFormat) {
        return this.props.onFormat(value, option);
      }
    },
    onDismissPicker(e) {
      if (this.props.onCancel) {
        this.props.onCancel(fmtEvent(this.props, e));
      }
    },
    onChange(value, options, e) {
      if (this.props.onChange) {
        this.props.onChange(value, options, fmtEvent(this.props, e));
      }
    },
  },
});

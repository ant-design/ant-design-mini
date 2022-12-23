import { InputBlurDefaultProps } from './props';
import fmtEvent from '../../_util/fmtEvent';
import mixinValue from '../../mixins/value';


Component({
  props: InputBlurDefaultProps,
  mixins: [mixinValue({
    transformValue(value, extra, updateWithoutFocusCheck) {
      if (!updateWithoutFocusCheck && this.focus) {
        return {
          needUpdate: false,
        };
      }
      return {
        needUpdate: true,
        value,
      }
    }
  })],
  methods: {
    focus: false,
    onChange(e) {
      const value = e.detail.value;
      if (this.isControlled()) {
        this.update(value, {}, true);
      }
      if (this.props.onChange) {
        this.props.onChange(value, fmtEvent(this.props, e));
      }
    },
    onFocus(e) {
      const value = e.detail.value;
      this.focus = true;
      if (this.props.onFocus) {
        this.props.onFocus(value, fmtEvent(this.props, e));
      }
    },
    onBlur(e) {
      const value = e.detail.value;
      this.focus = false;
      if (this.isControlled()) {
        this.update(this.props.value);
      }
      if (this.props.onBlur) {
        this.props.onBlur(value, fmtEvent(this.props, e));
      }
    },
    onConfirm(e) {
      const value = e.detail.value;
      if (this.props.onConfirm) {
        this.props.onConfirm(value, fmtEvent(this.props, e));
      }
    },
  }
});

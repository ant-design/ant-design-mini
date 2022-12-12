import { InputBaseDefaultProps } from './props';
import fmtEvent from '../../_util/fmtEvent';
import mixinValue from '../../mixins/value';


Component({
  props: InputBaseDefaultProps,
  mixins: [mixinValue()],
  ref() {
    return {
      update: (value) => {
        if (this.isControlled()) {
          console.warn('组件有value props为受控组件，更新使用setData外层的value');
          return;
        }
        this.update(value);
      },
      getValue: () => {
        return this.getValue();
      },
    }
  },
  methods: {
    onChange(e) {
      const value = e.detail.value;
      if (!this.isControlled()) {
        this.update(value);
      }
      if (this.props.onChange) {
        this.props.onChange(value, fmtEvent(this.props, e));
      }
    },
    onFocus(e) {
      const value = e.detail.value;
      if (this.props.onFocus) {
        this.props.onFocus(value, fmtEvent(this.props, e));
      }
    },
    onBlur(e) {
      const value = e.detail.value;
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


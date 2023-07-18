import { StepperDefaultProps } from './props';
import { getPrecision, getValidNumber } from './utils';
import fmtEvent from '../_util/fmtEvent';
import mixinValue from '../mixins/value';


Component({
  props: StepperDefaultProps,
  mixins: [mixinValue({
    transformValue(num, extra, precision) {
      const { valid, value } = getValidNumber(num, this.props.min, this.props.max, this.props.step, precision >= 0 ? precision : this.props.precision);
      if (valid && this.getValue() !== value) {
        return {
          needUpdate: true,
          value,
        }
      }
      return {
        needUpdate: false,
      };
    },
  })],
  methods: {
    onFocus(e) {
      if (this.props.onFocus) {
        const value = this.getValue();
        this.props.onFocus(value === '' ? null : Number(value), fmtEvent(this.props, e));
      }
    },
    onChange(val, e) {
      const { needUpdate, value } = this.update(val);
      if (this.props.onChange && needUpdate) {
        this.props.onChange(value === '' ? null : Number(value), fmtEvent(this.props, e));
      }
    },
    onConfirm(val, e) {
      if (this.props.onConfirm) {
        const value = this.getValue();
        this.props.onConfirm(value === '' ? null : Number(value), fmtEvent(this.props, e));
      }
    },
    onBlur(e) {
      if (this.isControlled()) {
        this.update(this.props.value);
      }
      if (this.props.onBlur) {
        const value = this.getValue();
        this.props.onBlur(value === '' ? null : Number(value), fmtEvent(this.props, e));
      }
    },
    onTap(e) {
      const { step, disabled, min = -Infinity, max = Infinity } = this.props;
      const value = Number(this.getValue());
      if (!disabled) {
        const { mode } = e.currentTarget.dataset;
        let result = value;
        const precision = this.props.precision >= 0 ? this.props.precision : Math.max(getPrecision(value), getPrecision(step));
        if (mode === 'minus') {
          // 【减】按钮的操作
          result = value - step;
          if (result < min) {
            result = min;
          }
        } else if (mode === 'add') {
          // 【加】按钮的操作
          result = value + step;
          if (result > max) {
            result = max;
          }
        }
        if (!this.isControlled()) {
          const { needUpdate } = this.update(result, {}, precision);
          if (!needUpdate) {
            return;
          }
        }
        if (this.props.onChange) {
          const { value } = getValidNumber(result, min, max, step, precision);
          this.props.onChange(Number(value), fmtEvent(this.props, e));
        }
      }
    },
  },
});

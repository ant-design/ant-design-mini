import { StepperDefaultProps } from './props';
import { upStep, downStep, getValidNumber } from './utils';
import fmtEvent from '../_util/fmtEvent';
import mixinValue from '../mixins/value';

Component({
  props: StepperDefaultProps,
  mixins: [mixinValue({
    transformValue(num) {
      const { min = -Infinity, max = Infinity } = this.props;
      const { valid, value } = getValidNumber(num, min, max);
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
      const value = this.getValue();
      if (this.props.onFocus) {
        this.props.onFocus(value === '' ? null : Number(value), fmtEvent(this.props, e));
      }
    },
    onChange(val, e) {
      const { needUpdate, value } = this.update(val);
      if (this.props.onChange && needUpdate) {
        this.props.onChange(value === '' ? null : Number(value), fmtEvent(this.props, e));
      }
    },
    onConfirm(value, e) {
      if (this.props.onConfirm) {
        this.props.onConfirm(value, fmtEvent(this.props, e));
      }
    },
    onBlur(e) {
      const value = this.getValue();
      if (this.isControlled()) {
        this.update(this.props.value);
      }
      if (this.props.onBlur) {
        this.props.onBlur(value === '' ? null : Number(value), fmtEvent(this.props, e));
      }
    },
    onTap(e) {
      const { step, disabled, precision } = this.props;
      const { min = -Infinity, max = Infinity } = this.props;
      let value = this.getValue();
      if (value === '') {
        value = 0;
      }
      if (!disabled) {
        const { mode } = e.currentTarget.dataset;
        let result: number = value;
        if (mode === 'minus') {
          // 【减】按钮的操作
          const minusTemp = downStep(value, step, precision);
          result = Math.max(minusTemp, min);
        } else if (mode === 'add') {
          // 【加】按钮的操作
          const addTemp = upStep(value, step, precision);
          result = Math.min(addTemp, max);
        }
        if (!this.isControlled()) {
          const { needUpdate } = this.update(result);
          if (!needUpdate) {
            return;
          }
        }
        if (this.props.onChange) {
          this.props.onChange(result, fmtEvent(this.props, e));
        }
      }
    },
  },
});

import { StepperDefaultProps } from './props';
import { upStep, downStep } from './utils';
import fmtEvent from '../_util/fmtEvent';
import mixinValue from '../mixins/value';


Component({
  props: StepperDefaultProps,
  mixins: [mixinValue({
    transformValue(num) {
      const { valid, value } = this.getValidNumber(num);
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
    getValidNumber(value) {
      if (typeof value === 'undefined' || value === null) {
        return {
          valid: true,
          value: '',
        };
      }
      let num: number;
      const { min = -Infinity, max = Infinity } = this.props;
      if (typeof value === 'string') {
        if (/^\s*$/.test(value)) {
          return {
            valid: true,
            value: '',
          };
        }
        if (!isNaN(Number(value))) {
          num = Number(value);
        }
      } else {
        num = value;
      }
      if (num > max) {
        num = max;
      } else if (num < min) {
        num = min;
      }
      if (typeof num === 'number' && !isNaN(value)) {
        return {
          valid: true,
          value: String(num),
        };
      }
      return {
        valid: false,
      };
    },
    onFocus(e) {
      if (this.props.onFocus) {
        this.props.onFocus(fmtEvent(this.props, e));
      }
    },
    onChange(val, e) {
      const { needUpdate, value } = this.update(val);
      if (this.props.onChange && needUpdate) {
        this.props.onChange(value === '' ? null : Number(value), fmtEvent(this.props, e));
      }
    },
    onBlur(e) {
      if (this.isControlled()) {
        this.update(this.props.value);
      }
      if (this.props.onBlur) {
        this.props.onBlur(fmtEvent(this.props, e));
      }
    },
    onConfirm(e) {
      if (this.props.onConfirm) {
        this.props.onConfirm(fmtEvent(this.props, e));
      }
    },
    onTap(e) {
      const { step, disabled, precision } = this.props;
      const { min = -Infinity, max = Infinity } = this.props;
      const value = this.getValue();
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
        const { needUpdate } = this.update(result);
        if (this.props.onChange && needUpdate) {
          this.props.onChange(result, fmtEvent(this.props, e));
        }
      }
    },
  },
});

import { StepperDefaultProps } from './props';
import { upStep, downStep } from './utils';
import fmtEvent from '../_util/fmtEvent';


function getValue(propsValue, dataValue, defaultValue) {
  if (typeof propsValue !== 'undefined') {
    return propsValue;
  }
  if (typeof dataValue !== 'undefined') {
    return dataValue;
  }
  return defaultValue;
}


Component({
  props: StepperDefaultProps,
  data: {
    selfValue: undefined,
  },
  methods: {
    lastNumber: 0,
    setLastNumber(value: string | number) {
      let num: number;
      const { min = -Infinity, max = Infinity } = this.props;
      if (typeof value === 'string') {
        if (value && !isNaN(Number(value))) {
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
      if (typeof num !== 'undefined') {
        this.lastNumber = num;
      }
    },
    setSelfValue(value) {
      if ('value' in this.props) {
        return;
      }
      this.setData({
        selfValue: value,
      });
    },
    onInput(e) {
      const { value } = e.detail;
      this.setLastNumber(value);
      this.setSelfValue(value);
      if (this.props.onChange) {
        this.props.onChange(this.lastNumber, fmtEvent(this.props, e));
      }
    },
    onBlur(e) {
      this.setSelfValue(this.lastNumber);
      if (this.props.onBlur) {
        this.props.onBlur(fmtEvent(this.props, e));
      }
    },
    onConfirm(e) {
      if (this.props.onConfirm) {
        this.props.onConfirm(fmtEvent(this.props, e));
      }
    },
    onChange(e) {
      const { step, disabled, precision } = this.props;
      const { min = -Infinity, max = Infinity } = this.props;
      const value = getValue(this.props.value, this.data.selfValue, this.props.defaultValue);
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
        this.setLastNumber(result);
        if (typeof this.props.value === 'undefined') {
          this.setSelfValue(result);
        }
        if (this.props.onChange) {
          this.props.onChange(result, fmtEvent(this.props, e));
        }
      }
    },
  },
});

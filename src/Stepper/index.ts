import { StepperDefaultProps } from './props';
import { upStep, downStep } from './utils';
import fmtEvent from '../_util/fmtEvent';


Component({
  props: StepperDefaultProps,
  data: {
    selfValue: '',
  },
  didUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.update(this.props.value);
    }
  },
  didMount() {
    this.update(typeof this.props.value !== 'undefined' ? this.props.value : this.props.defaultValue);
  },
  methods: {
    lastNumber: '',
    update(num) {
      const lastNumber = this.lastNumber;
      const { needChange, value } = this.getValue(num);
      if (needChange && lastNumber !== value) {
        this.setSelfValue(value);
        this.lastNumber = value;
      }
      return needChange;
    },
    getValue(value) {
      if (typeof value === 'undefined' || value === null) {
        return {
          needChange: true,
          value: '',
        };
      }
      let num: number;
      const { min = -Infinity, max = Infinity } = this.props;
      if (typeof value === 'string') {
        if (/^\s*$/.test(value)) {
          return {
            needChange: true,
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
      if (typeof num === 'number') {
        return {
          needChange: true,
          value: String(num),
        };
      }
      return {
        needChange: false,
      };
    },
    setSelfValue(value) {
      this.setData({
        selfValue: value,
      });
    },
    onFocus(e) {
      if (this.props.onFocus) {
        this.props.onFocus(fmtEvent(this.props, e));
      }
    },
    onChange(value, e) {
      const needChange = this.update(value);
      if (this.props.onChange && needChange) {
        this.props.onChange(this.lastNumber === '' ? null : Number(this.lastNumber), fmtEvent(this.props, e));
      }
    },
    onBlur(e) {
      if ('value' in this.props) {
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
      const value = Number(this.lastNumber);
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
        const needChange = this.update(result);
        if (this.props.onChange && needChange) {
          this.props.onChange(result, fmtEvent(this.props, e));
        }
      }
    },
  },
});

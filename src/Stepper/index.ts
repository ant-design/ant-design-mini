import { StepperDefaultProps } from './props';
import computed from '../mixins/computed';
import controlled from '../mixins/controlled';
import { upStep, downStep } from './utils';
import formMixin from '../mixins/form';

Component({
  mixins: [computed, controlled(), formMixin()],
  props: StepperDefaultProps,
  data: {
    confirm: false,
    _value: null,
  } as {
    confirm: boolean,
    _value: string,
    cValue: number,
    minusDisabled: boolean,
    addDisabled: boolean,
    min: number,
    max: number,
  },
  didMount() {
    const { min, max, cValue } = this.data;
    if (cValue < min) {
      this.setData({
        cValue: min,
      });
    }
    if (cValue > max) {
      this.setData({
        cValue: max,
      });
    }
  },
  methods: {
    computed() {
      let { min, max } = this.props;
      let { cValue } = this.data;
      if (max === undefined) {
        max = Number.MAX_SAFE_INTEGER;
      }
      if (min === undefined) {
        min = 0;
      }
      if (cValue === undefined) {
        cValue = min;
      }
      return { min, max, cValue };
    },
    onInput(e) {
      const { value } = e.detail;
      if (value === '') {
        this.setData({
          _value: '0',
        });
      } else {
        this.setData({
          _value: value,
        });
      }
    },
    onFocus(e) {
      const { value } = e.detail;
      this.props.onFocus?.(value);
    },
    onBlur(e) {
      if (this.data.confirm) {
        this.setData({
          confirm: false,
        });
      } else {
        const { value } = e.detail;
        this.setData({
          _value: null,
        });
        this.cOnChange(this.getInputValue(value));
        this.props.onBlur?.(this.getInputValue(value));
      }
    },
    onConfirm(e) {
      const { value } = e.detail;
      this.setData({
        _value: null,
        confirm: true,
      });
      this.cOnChange(this.getInputValue(value));
    },
    getInputValue(inputValue) {
      const { min, max } = this.props;
      let inputValueTemp = null;
      if (!isNaN(Number(inputValue))) {
        if (Number(inputValue) <= min) {
          inputValueTemp = min;
        } else if (Number(inputValue) >= max) {
          inputValueTemp = max;
        } else {
          inputValueTemp = Number(inputValue);
        }
        return inputValueTemp;
      }
    },
    onChange(e) {
      const { step, disabled, precision } = this.props;
      const { min, max, cValue } = this.data;
      if (!disabled) {
        const { mode } = e.currentTarget.dataset;
        if (mode === 'minus') {
          // 【减】按钮的操作
          const minusTemp = downStep(cValue, step, precision);
          this.cOnChange(Math.max(minusTemp, min));
        } else if (mode === 'add') {
          // 【加】按钮的操作
          const addTemp = upStep(cValue, step, precision);
          this.cOnChange(Math.min(addTemp, max));
        }
      }
    },
  },
});

import mixinValue from '../mixins/value';
import { Component, getValueFromProps, triggerEvent } from '../_util/simply';
import { assertAilpayNativeNotSupport } from '../_util/support';
import { StepperDefaultProps } from './props';
import { getPrecision, getValidNumber } from './utils';

assertAilpayNativeNotSupport('Stepper');

Component({
  props: StepperDefaultProps,
  methods: {
    onFocus(e) {
      const value = this.getValue();
      triggerEvent(this, 'focus', value === '' ? null : Number(value), e);
    },
    onChange(val, e) {
      let curVal = val;
      /// #if WECHAT
      curVal = val.detail;
      /// #endif
      const { needUpdate, value } = this.update(curVal);
      if (getValueFromProps(this, 'onChange') && needUpdate) {
        triggerEvent(this, 'change', value === '' ? null : Number(value), e);
      }
    },
    onConfirm(val, e) {
      const value = this.getValue();
      triggerEvent(this, 'confirm', value === '' ? null : Number(value), e);
    },
    onBlur(e) {
      if (this.isControlled()) {
        this.update(getValueFromProps(this, 'value'));
      }

      const value = this.getValue();
      triggerEvent(this, 'blur', value === '' ? null : Number(value), e);
    },
    onDisabledTap(e) {
      const onDisabledTap = getValueFromProps(this, 'onDisabledTap');
      onDisabledTap && onDisabledTap(e);
    },
    onTap(e) {
      const [
        step,
        disabled,
        min = -Infinity,
        max = Infinity,
        precisionFormProps,
      ] = getValueFromProps(this, [
        'step',
        'disabled',
        'min',
        'max',
        'precision',
      ]);
      const value = Number(this.getValue() || 0);
      if (!disabled) {
        const { mode } = e.currentTarget.dataset;
        let result = value;
        const precision =
          precisionFormProps >= 0
            ? precisionFormProps
            : Math.max(getPrecision(value), getPrecision(step));
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

        {
          const { value } = getValidNumber(result, min, max, step, precision);
          triggerEvent(this, 'change', Number(value), e);
        }
      }
    },
  },
  mixins: [
    mixinValue({
      transformValue(num, extra, precision) {
        const [min, max, step, precisionFormProps] = getValueFromProps(this, [
          'min',
          'max',
          'step',
          'precision',
        ]);
        const { valid, value } = getValidNumber(
          num,
          min,
          max,
          step,
          precision >= 0 ? precision : precisionFormProps
        );
        if (valid && this.getValue() !== value) {
          return {
            needUpdate: true,
            value,
          };
        }
        return {
          needUpdate: false,
        };
      },
    }),
  ],
});

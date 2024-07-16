import { Component, triggerEvent, getValueFromProps } from '../_util/simply';
import { StepperDefaultProps } from './props';
import { getPrecision, getValidNumber } from './utils';
import mixinValue from '../mixins/value';
Component(StepperDefaultProps, {
    onFocus: function (e) {
        var value = this.getValue();
        triggerEvent(this, 'focus', value === '' ? null : Number(value), e);
    },
    onChange: function (val, e) {
        var _a = this.update(val), needUpdate = _a.needUpdate, value = _a.value;
        if (getValueFromProps(this, 'onChange') && needUpdate) {
            triggerEvent(this, 'change', value === '' ? null : Number(value), e);
        }
    },
    onConfirm: function (val, e) {
        var value = this.getValue();
        triggerEvent(this, 'confirm', value === '' ? null : Number(value), e);
    },
    onBlur: function (e) {
        if (this.isControlled()) {
            this.update(getValueFromProps(this, 'value'));
        }
        var value = this.getValue();
        triggerEvent(this, 'blur', value === '' ? null : Number(value), e);
    },
    onTap: function (e) {
        var _a = getValueFromProps(this, [
            'step',
            'disabled',
            'min',
            'max',
            'precision',
        ]), step = _a[0], disabled = _a[1], _b = _a[2], min = _b === void 0 ? -Infinity : _b, _c = _a[3], max = _c === void 0 ? Infinity : _c, precisionFormProps = _a[4];
        var value = Number(this.getValue() || 0);
        if (!disabled) {
            var mode = e.currentTarget.dataset.mode;
            var result = value;
            var precision = precisionFormProps >= 0
                ? precisionFormProps
                : Math.max(getPrecision(value), getPrecision(step));
            if (mode === 'minus') {
                // 【减】按钮的操作
                result = value - step;
                if (result < min) {
                    result = min;
                }
            }
            else if (mode === 'add') {
                // 【加】按钮的操作
                result = value + step;
                if (result > max) {
                    result = max;
                }
            }
            if (!this.isControlled()) {
                var needUpdate = this.update(result, {}, precision).needUpdate;
                if (!needUpdate) {
                    return;
                }
            }
            {
                var value_1 = getValidNumber(result, min, max, step, precision).value;
                triggerEvent(this, 'change', Number(value_1), e);
            }
        }
    },
}, undefined, [
    mixinValue({
        transformValue: function (num, extra, precision) {
            var _a = getValueFromProps(this, [
                'min',
                'max',
                'step',
                'precision',
            ]), min = _a[0], max = _a[1], step = _a[2], precisionFormProps = _a[3];
            var _b = getValidNumber(num, min, max, step, precision >= 0 ? precision : precisionFormProps), valid = _b.valid, value = _b.value;
            if (valid && this.getValue() !== value) {
                return {
                    needUpdate: true,
                    value: value,
                };
            }
            return {
                needUpdate: false,
            };
        },
    }),
]);

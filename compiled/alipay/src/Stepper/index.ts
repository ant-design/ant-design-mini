import { useEvent } from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { useLayoutUpdateEffect } from '../_util/hooks/useLayoutEffect';
import { hasValue, useMergedState } from '../_util/hooks/useMergedState';
import { IStepperProps } from './props';
import { getPrecision, getValidNumber } from './utils';

const Stepper = (props: IStepperProps) => {
  function formatValue(num: string | number, precision?: number) {
    const { valid, value } = getValidNumber(
      num,
      props.min,
      props.max,
      props.step,
      precision >= 0 ? precision : props.precision
    );
    if (valid) {
      return { valid, value };
    }
    return { valid: false };
  }
  const isControlled = hasValue(props.value);
  const [value, setValue] = useMergedState<number | string>(
    props.defaultValue,
    {
      defaultValue: props.value,
      postState(value) {
        return formatValue(value).value;
      },
    }
  );

  useLayoutUpdateEffect(() => {
    const { valid, value } = formatValue(props.value);
    if (valid) {
      setValue(value);
    }
  }, [props.value]);

  function updateValue(val: number | string, precision?: number) {
    const { value: newValue, valid } = formatValue(val, precision);
    if (valid && newValue !== value) {
      setValue(newValue);
      return { changed: true, newValue };
    }
    return { changed: false };
  }
  const { triggerEvent } = useComponentEvent(props);
  useEvent(
    'onFocus',
    (e) => {
      triggerEvent('focus', value === '' ? null : Number(value), e);
    },
    [value]
  );
  useEvent(
    'onChange',
    (v, event) => {
      const { changed, newValue } = updateValue(v);
      if (changed) {
        triggerEvent(
          'change',
          newValue === '' ? null : Number(newValue),
          event
        );
      }
    },
    [value]
  );
  useEvent(
    'onConfirm',
    (_v, event) => {
      triggerEvent('confirm', value === '' ? null : Number(value), event);
    },
    [value]
  );
  useEvent(
    'onBlur',
    (event) => {
      if (isControlled) {
        const { changed, newValue } = updateValue(props.value);
        if (changed) {
          triggerEvent(
            'blur',
            newValue === '' ? null : Number(newValue),
            event
          );
        } else {
          triggerEvent('blur', value === '' ? null : Number(value), event);
        }
      } else {
        triggerEvent('blur', value === '' ? null : Number(value), event);
      }
    },
    [value, props]
  );
  useEvent(
    'onTap',
    (e) => {
      const { step, disabled, min = -Infinity, max = Infinity } = props;
      const newValue = Number(value);
      if (!disabled) {
        const { mode } = e.currentTarget.dataset;
        let result = newValue;
        const precision =
          props.precision >= 0
            ? props.precision
            : Math.max(getPrecision(newValue), getPrecision(step));
        if (mode === 'minus') {
          result = newValue - step;
          if (result < min) {
            result = min;
          }
        } else if (mode === 'add') {
          result = newValue + step;

          if (result > max) {
            result = max;
          }
        }
        if (!isControlled) {
          const { changed } = updateValue(result, precision);
          if (!changed) {
            return;
          }
        }
        const { value: validValue } = getValidNumber(
          result,
          min,
          max,
          step,
          precision
        );
        triggerEvent('change', Number(validValue), e);
      }
    },
    [value, props]
  );
  return { mixin: { value } };
};

mountComponent(Stepper, {
  value: null,
  min: null,
  max: null,
  step: 1,
  type: 'digit',
  precision: null,
  inputClassName: '',
  inputStyle: '',
  disabled: false,
  defaultValue: null,
});

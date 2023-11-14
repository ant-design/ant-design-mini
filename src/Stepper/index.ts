import { useEvent } from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { useMixState } from '../_util/hooks/useMixState';
import { resolveEventValue } from '../_util/platform';
import { IStepperProps } from './props';
import { getPrecision, getValidNumber } from './utils';

const Stepper = (props: IStepperProps) => {
  const [value, { isControlled, update }] = useMixState<
    number | string,
    number | string,
    number
  >(props.defaultValue, {
    value: props.value,
    postState(num: string | number, precision?: number) {
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
    },
  });

  const { triggerEvent } = useComponentEvent(props);
  const toNumber = (v: string | number) => (v === '' ? null : Number(v));
  useEvent(
    'onFocus',
    (e) => {
      triggerEvent('focus', toNumber(value), e);
    },
    [value]
  );
  useEvent(
    'onChange',
    (v, event) => {
      const state = update(resolveEventValue(v));
      if (state.changed) {
        triggerEvent('change', toNumber(state.newValue), event);
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
    (_v, event) => {
      if (isControlled) {
        const state = update(props.value);
        if (state.changed) {
          triggerEvent(
            'blur',
            state.newValue === '' ? null : Number(state.newValue),
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
          typeof props.precision === 'number' && props.precision >= 0
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
          const { changed } = update(result, precision);
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
  defaultValue: null,
  precision: -1,
  min: Number.MIN_SAFE_INTEGER,
  max: Number.MAX_SAFE_INTEGER,
  step: 1,
  type: 'digit',
  inputClassName: '',
  inputStyle: '',
  disabled: false,
});

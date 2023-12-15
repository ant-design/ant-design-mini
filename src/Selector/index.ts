import { useEvent } from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { useMixState } from '../_util/hooks/useMixState';
import { ISelectorProps, Value } from './props';

const Selector = (props: ISelectorProps) => {
  const [selectorValue, { isControlled, update }] = useMixState(
    props.defaultValue,
    {
      value: props.value,
    }
  );
  const { triggerEventValues } = useComponentEvent(props);
  useEvent('onChange', (e) => {
    const { disabled, value } = e.currentTarget.dataset;
    const { multiple, options, maxSelectedCount, minSelectedCount } = props;
    if (disabled || props.disabled) {
      return;
    }
    if (multiple) {
      let currentValue = (selectorValue as Value[]) || [];
      if (currentValue.indexOf(value) > -1) {
        if (
          !isNaN(minSelectedCount) &&
          currentValue.length <= minSelectedCount
        ) {
          triggerEventValues(
            'selectMin',
            [value, options.find((v) => v.value === value)],
            e
          );
          return;
        }
        currentValue = currentValue.filter((v) => v !== value);
      } else {
        if (
          !isNaN(maxSelectedCount) &&
          currentValue.length >= maxSelectedCount
        ) {
          triggerEventValues(
            'onSelectMax',
            [value, options.find((v) => v.value === value)],
            e
          );
          return;
        }
        currentValue = [...currentValue, value];
      }
      if (!isControlled) {
        update(currentValue);
      }
      triggerEventValues(
        'change',
        [
          currentValue,
          options.filter((v) => currentValue.indexOf(v.value) > -1),
        ],
        e
      );
    } else {
      if (value === selectorValue) {
        if (minSelectedCount === 1) {
          triggerEventValues(
            'selectMin',
            [value, options.find((v) => v.value === value)],
            e
          );
          return;
        }
        if (!isControlled) {
          update(undefined);
        }
        triggerEventValues('change', [undefined, undefined], e);
      } else {
        if (!isControlled) {
          update(value);
        }
        triggerEventValues(
          'change',
          [value, options.find((v) => v.value === value)],
          e
        );
      }
    }
  });

  return {
    mixin: {
      value: selectorValue,
    },
  };
};

mountComponent(Selector, {
  value: null,
  defaultValue: null,
  options: null,
  activeItemClassName: '',
  activeItemStyle: '',
  multiple: false,
  minSelectedCount: null,
  maxSelectedCount: null,
  disabled: false,
});

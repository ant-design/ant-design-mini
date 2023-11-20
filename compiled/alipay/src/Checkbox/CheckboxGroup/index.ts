import { useEvent } from 'functional-mini/component';
import { mountComponent } from '../../_util/component';
import { useComponentEvent } from '../../_util/hooks/useComponentEvent';
import { useMixState } from '../../_util/hooks/useMixState';
import { ICheckboxGroupProps } from './props';

const CheckboxGroup = (props: ICheckboxGroupProps) => {
  const [value, { isControlled, update }] = useMixState(props.defaultValue, {
    value: props.value,
    postState(value) {
      return {
        valid: true,
        value: value || [],
      };
    },
  });
  const { triggerEvent } = useComponentEvent(props);
  useEvent(
    'onChange',
    (_, e) => {
      if (props.disabled) {
        return;
      }
      let currentValue = value;
      const { index } = e.currentTarget.dataset;
      const selectValue = props.options[index].value;
      if (currentValue.indexOf(selectValue) > -1) {
        currentValue = currentValue.filter((v) => v !== selectValue);
      } else {
        currentValue = [...currentValue, selectValue];
      }
      if (!isControlled) {
        update(currentValue);
      }
      triggerEvent('change', currentValue, e);
    },
    [props, value, isControlled]
  );
  return {
    mixin: { value },
  };
};

mountComponent(CheckboxGroup, {
  value: null,
  defaultValue: [],
  disabled: false,
  position: 'vertical',
  color: '',
  options: [],
});

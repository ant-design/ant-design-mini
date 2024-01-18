import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { useHandleCustomEvent } from '../_util/hooks/useHandleCustomEvent';
import { useMixState } from '../_util/hooks/useMixState';
import {
  ChecklistFunctionalProps,
  ChecklistItem,
  IChecklistProps,
} from './props';

const Checkbox = (props: IChecklistProps) => {
  const [state, { isControlled, update }] = useMixState<
    Array<string | number> | string | number
  >(props.defaultValue, {
    value: props.value,
    postState(val) {
      const value = val || [];
      return {
        valid: true,
        value,
      };
    },
  });

  const { triggerEventValues } = useComponentEvent(props);
  useHandleCustomEvent<ChecklistItem>('onChange', (item) => {
    const { multiple, options } = props;
    const value = item.value;
    if (multiple) {
      let currentValue = state as Array<string | number>;
      if (currentValue.indexOf(value) > -1) {
        currentValue = currentValue.filter((v) => v !== value);
      } else {
        currentValue = [...currentValue, value];
      }
      if (!isControlled) {
        update(currentValue);
      }
      triggerEventValues('change', [
        currentValue,
        options.filter((v) => currentValue.indexOf(v.value) > -1),
      ]);
    } else {
      if (!isControlled) {
        update(value);
      }
      triggerEventValues('change', [
        value,
        options.find((v) => v.value === value),
      ]);
    }
  });

  return {
    mixin: {
      value: state,
    },
  };
};

mountComponent(Checkbox, ChecklistFunctionalProps);

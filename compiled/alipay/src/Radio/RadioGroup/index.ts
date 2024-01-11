import { IRadioGroupProps, RadioGroupFunctionalProps } from './props';
import { mountComponent } from '../../_util/component';
import { useMixState } from '../../_util/hooks/useMixState';
import { useEvent } from 'functional-mini/component';
import { useComponentEvent } from '../../_util/hooks/useComponentEvent';

const RadioGroup = (props: IRadioGroupProps) => {
  const [value, { isControlled, update }] = useMixState(props.defaultValue, {
    value: props.value,
  });
  const { triggerEvent } = useComponentEvent(props);


  useEvent('onChange', (_, e) => {
    const index = e.currentTarget.dataset.index;
    const value = props.options[index].value;
    if (!isControlled) {
      update(value);
    }
    triggerEvent('change', value, e);
  });

  return {
    mixin: {
      value,
    },
  };
};

mountComponent(RadioGroup, RadioGroupFunctionalProps);

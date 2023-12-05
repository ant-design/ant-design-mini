import { mountComponent } from '../_util/component';
import { useMergedState, hasValue } from '../_util/hooks/useMergedState';
import { ISwitchProps } from './props';
import { useEvent } from 'functional-mini/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';

const Switch = (props: ISwitchProps) => {
  const [value, updateValue] = useMergedState(props.defaultChecked, {
    value: props.checked,
  });
  const { triggerEvent } = useComponentEvent(props);
  useEvent('onChange', (e) => {
    const newValue = !value;
    if (!hasValue(props.checked)) {
      updateValue(newValue);
    }
    triggerEvent('change', newValue, e);
  });

  return {
    mixin: { value },
  };
};

mountComponent<ISwitchProps>(Switch, {
  checked: null,
  loading: false,
  color: '',
  checkedText: '',
  uncheckedText: '',
  size: 'medium',
  disabled: false,
  defaultChecked: false,
});

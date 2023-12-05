import { useEvent } from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { useMixState } from '../_util/hooks/useMixState';
import { ICheckboxProps } from './props';

const Checkbox = (props: ICheckboxProps) => {
  const [value, { isControlled, update }] = useMixState(props.defaultChecked, {
    value: props.checked,
  });
  const { triggerEvent } = useComponentEvent(props);
  useEvent('onChange', (e) => {
    const newValue = !value;
    if (!isControlled) {
      update(newValue);
    }
    triggerEvent('change', newValue, e);
  });

  return {
    mixin: {
      value,
    },
  };
};

mountComponent(Checkbox, {
  value: null,
  checked: null,
  defaultChecked: null,
  disabled: false,
  color: '',
});

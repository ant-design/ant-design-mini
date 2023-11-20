import { CheckboxDefaultProps, ICheckboxProps } from './props';
import fmtEvent from '../_util/fmtEvent';
import mixinValue from '../mixins/value';
import '../_util/assert-component2';
import { useMixState } from '../_util/hooks/useMixState';
import { useEvent } from 'functional-mini/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { mountComponent } from '../_util/component';

const Checkbox = (props: ICheckboxProps) => {
  const [value, { isControlled, update }] = useMixState(props.defaultChecked, {
    value: props.checked,
  });
  const { triggerEvent } = useComponentEvent(props);
  useEvent(
    'onChange',
    (e) => {
      const newValue = !value;
      if (!isControlled) {
        update(value);
      }
      triggerEvent('change', newValue, e);
    },
    []
  );

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

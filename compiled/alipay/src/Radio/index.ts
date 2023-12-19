import { useEvent } from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { useMixState } from '../_util/hooks/useMixState';
import { IRadioProps } from './props';

const Radio = (props: IRadioProps) => {
  const [radioValue, { isControlled, update }] = useMixState(
    props.defaultChecked,
    {
      value: props.checked,
    }
  );

  const { triggerEvent } = useComponentEvent(props);


  useEvent('onChange', (e) => {
    const value = e.detail.value;
    if (!isControlled) {
      update(value);
    }
    triggerEvent('change', value, e);
  });

  return {
    mixin: {
      value: radioValue,
    },
  };
};

mountComponent(Radio, {
  value: null,
  defaultChecked: null,
  color: '',
  checked: null,
  disabled: false,
});

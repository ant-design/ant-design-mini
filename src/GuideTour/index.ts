import { useEvent } from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { useMixState } from '../_util/hooks/useMixState';
import { GuideTourDefaultProps, IGuideTour } from './props';

const GuideTour = (props: IGuideTour) => {
  const [state, { isControlled, update }] = useMixState(props.defaultCurrent, {
    value: props.current,
  });
  const { triggerEvent, triggerEventOnly } = useComponentEvent(props);

  useEvent('onNext', () => {
    const currentValue = state;
    const newCurrent = currentValue + 1;
    if (!isControlled) {
      update(newCurrent);
    }
    triggerEvent('change', newCurrent);
  });

  useEvent('onPrev', () => {
    const currentValue = state;
    const newCurrent = currentValue - 1;
    if (!isControlled) {
      update(newCurrent);
    }
    triggerEvent('change', newCurrent);
  });

  useEvent('onCancel', () => {
    triggerEventOnly('cancel');
  });

  useEvent('onSwiperChange', (e) => {
    const { current } = e.detail;
    if (!isControlled) {
      update(current);
    }
    triggerEvent('change', current);
  });

  return {
    mixin: { value: state },
  };
};

mountComponent(GuideTour, GuideTourDefaultProps);

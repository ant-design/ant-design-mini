import { useEvent } from 'functional-mini/component';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { useMixState } from '../_util/hooks/useMixState';
import { TabBarFunctionalProps, ITabBarProps } from './props';

const TabBar = (props: ITabBarProps) => {
  const [value, { isControlled, update }] = useMixState(props.defaultCurrent, {
    value: props.current,
  });
  const { triggerEvent } = useComponentEvent(props);
  useEvent('onChange', (e) => {
    const { index } = e.currentTarget.dataset;
    if (index === value) {
      return;
    }
    if (!isControlled) {
      update(index);
    }
    triggerEvent('change', index, e);
  });
  return {
    mixin: {
      value,
    },
  };
};

mountComponent(TabBar, TabBarFunctionalProps);

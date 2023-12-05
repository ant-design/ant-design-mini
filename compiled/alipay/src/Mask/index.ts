import { useEvent } from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { IMaskProps } from './props';

const Mask = (props: IMaskProps) => {
  const { triggerEventOnly } = useComponentEvent(props);
  useEvent('onMaskClick', (e) => {
    triggerEventOnly('maskTap', e);
  });
  return {};
};

mountComponent<IMaskProps>(Mask, {
  show: true,
});

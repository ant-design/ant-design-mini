import { useEvent } from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { ActionSheetDefaultProps, IActionSheetProps } from './props';

const ActionSheet = (props: IActionSheetProps) => {
  const { triggerEventOnly, triggerEventValues } = useComponentEvent(props);

  useEvent('onAction', (e) => {
    const { item, index } = e.target.dataset;
    if (item?.disabled) return;
    triggerEventOnly('close', e);
    triggerEventValues('action', [item, index], e);
  });
  useEvent('onClose', (e) => {
    triggerEventOnly('close', e);
  });

  return {};
};

mountComponent(ActionSheet, ActionSheetDefaultProps);

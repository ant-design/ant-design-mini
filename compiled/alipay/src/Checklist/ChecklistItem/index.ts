import { useEvent } from 'functional-mini/component';
import { mountComponent } from '../../_util/component';
import { useComponentEvent } from '../../_util/hooks/useComponentEvent';
import { ChecklistItemDefaultProps, IChecklistItemProps } from './props';

const CheckListItem = (props: IChecklistItemProps) => {
  const { triggerEvent } = useComponentEvent(props);
  useEvent('onChecklistItemClick', () => {
    triggerEvent('change', props.item);
  });
};

mountComponent(CheckListItem, ChecklistItemDefaultProps);

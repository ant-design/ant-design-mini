import { useEvent } from 'functional-mini/component';
import { mountComponent } from '../../_util/component';
import { useComponentEvent } from '../../_util/hooks/useComponentEvent';
import { ChecklistItemDefaultProps } from './props';
var CheckListItem = function (props) {
    var triggerEvent = useComponentEvent(props).triggerEvent;
    useEvent('onChecklistItemClick', function () {
        triggerEvent('change', props.item);
    });
};
mountComponent(CheckListItem, ChecklistItemDefaultProps);

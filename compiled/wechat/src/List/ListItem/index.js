import { mountComponent } from '../../_util/component';
import { useComponentEvent } from '../../_util/hooks/useComponentEvent';
var ListItem = function (props) {
    var _a = useComponentEvent(props), forwardCatchEvent = _a.forwardCatchEvent, forwardEvent = _a.forwardEvent;
    return {};
};
mountComponent(ListItem, {
    image: '',
    title: '',
    brief: '',
    arrow: null,
    extra: '',
    extraBrief: '',
    disabled: false,
    showDivider: true,
});

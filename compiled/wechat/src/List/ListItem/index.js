import { mountComponent } from '../../_util/component';
import { useComponentEvent } from '../../_util/hooks/useComponentEvent';
var ListItem = function (props) {
    var _a = useComponentEvent(props), alipayForwardCatchEvent = _a.alipayForwardCatchEvent, alipayForwardEvent = _a.alipayForwardEvent;
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

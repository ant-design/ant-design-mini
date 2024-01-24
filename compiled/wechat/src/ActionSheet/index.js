import { useEvent } from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { ActionSheetDefaultProps } from './props';
var ActionSheet = function (props) {
    var _a = useComponentEvent(props), triggerEventOnly = _a.triggerEventOnly, triggerEventValues = _a.triggerEventValues;
    useEvent('onAction', function (e) {
        var _a = e.currentTarget.dataset, item = _a.item, index = _a.index;
        if (item === null || item === void 0 ? void 0 : item.disabled)
            return;
        triggerEventOnly('close', e);
        triggerEventValues('action', [item, index], e);
    });
    useEvent('onClose', function (e) {
        triggerEventOnly('close', e);
    });
    return {};
};
mountComponent(ActionSheet, ActionSheetDefaultProps);

import { Component, triggerEventOnly, triggerEventValues } from '../_util/simply';
import { ActionSheetDefaultProps } from './props';
Component(ActionSheetDefaultProps, {
    onAction: function (e) {
        var _a = e.currentTarget.dataset, item = _a.item, index = _a.index;
        if (item === null || item === void 0 ? void 0 : item.disabled)
            return;
        triggerEventOnly(this, 'close', e);
        triggerEventValues(this, 'action', [item, index], e);
    },
    onClose: function (e) {
        triggerEventOnly(this, 'close', e);
    }
});

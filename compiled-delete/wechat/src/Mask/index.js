import { Component, triggerEventOnly } from '../_util/simply';
Component({
    show: true,
}, {
    onMaskTap: function (e) {
        triggerEventOnly(this, 'maskTap', e);
    },
});

import { Component, triggerEventOnly } from '../_util/simply';
Component({
    show: true,
}, {
    onMaskClick: function (e) {
        triggerEventOnly(this, 'maskTap', e);
    },
});

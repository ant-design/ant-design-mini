import { Component, triggerEvent } from '../_util/simply';
import { RadioDefaultProps } from './props';
import mixinValue from '../mixins/value';
Component(RadioDefaultProps, {
    handleTap: function (e) {
        // 只能从 false -> true
        if (this.getValue()) {
            return;
        }
        if (!this.isControlled()) {
            this.update(true);
        }
        triggerEvent(this, 'change', true, e);
    },
}, null, [
    mixinValue({
        valueKey: 'checked',
        defaultValueKey: 'defaultChecked',
    }),
]);

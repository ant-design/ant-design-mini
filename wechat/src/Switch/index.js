import wechatMixinValue from '../mixins/wechat-value';
import '../_util/assert-component2';
Component({
    properties: {
        checked: {
            type: Boolean,
            value: null,
        },
        loading: Boolean,
        color: String,
        checkedText: String,
        uncheckedText: String,
        size: {
            type: String,
            value: 'medium',
        },
        disabled: Boolean,
        defaultChecked: Boolean,
    },
    options: {
        //@ts-ignore
        styleIsolation: 'shared',
    },
    behaviors: [
        wechatMixinValue({
            valueKey: 'checked',
            defaultValueKey: 'defaultChecked',
        }),
    ],
    methods: {
        onChange(e) {
            const value = !this.getValue();
            if (!this.isControlled()) {
                this.update(value);
            }
            this.triggerEvent('change', value);
        },
    },
});

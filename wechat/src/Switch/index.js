import * as mixinValue from '../mixins/mixin-value';
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
        mixinValue.wechatMixinValue({
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

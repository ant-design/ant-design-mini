export default ({ valueKey = 'value', defaultValueKey = 'defaultValue', scopeKey = 'mixin', transformValue = (value) => ({
    needUpdate: true,
    value,
}), }) => {
    return Behavior({
        observers: {
            [valueKey]: function () {
                this.update(this.data[valueKey], {
                    nextProps: this.data,
                });
            },
        },
        lifetimes: {
            attached: function () {
                const value = this.data[valueKey] !== null
                    ? this.data[valueKey]
                    : this.data[defaultValueKey];
                const { needUpdate } = this.update(value, {
                    nextProps: this.data,
                });
                if (!needUpdate) {
                    this.updateControlled();
                }
            },
        },
        data: {
            [scopeKey]: {
                value: undefined,
                updated: false,
                controlled: false,
            },
        },
        //共享方法：
        methods: {
            getValue(prevData) {
                return (prevData || this.data)[scopeKey].value;
            },
            isControlled() {
                if (this.data.controlled !== null) {
                    return !!this.data.controlled;
                }
                return this.data !== null;
            },
            update(val, extra, ...args) {
                const { needUpdate, value } = transformValue.call(this, val, extra, ...args) || {};
                if (needUpdate) {
                    this.setData({
                        [scopeKey]: {
                            value,
                            updated: true,
                            controlled: this.isControlled(),
                        },
                    });
                }
                return {
                    needUpdate,
                    value,
                };
            },
            updateControlled() {
                this.setData({
                    [scopeKey]: {
                        controlled: this.isControlled(),
                    },
                });
            },
        },
    });
};

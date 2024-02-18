import { resolveEventValue } from './utils';
Page({
    data: {
        value: '',
        money: '',
    },
    onChange(value, e) {
        console.log(value, e);
    },
    handleChange(value) {
        this.setData({
            value: resolveEventValue(value),
        });
    },
    handleMoney(value) {
        console.log(value);
        if (isNaN(Number(resolveEventValue(value)))) {
            return;
        }
        this.setData({
            money: resolveEventValue(value),
        });
    },
    clear() {
        this.setData({
            value: '',
        });
    },
    handleRef(input) {
        this.input = resolveEventValue(input);
    },
    clearByInputRef() {
        this.input.update('');
    },
});

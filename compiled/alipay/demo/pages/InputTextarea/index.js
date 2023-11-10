import { resolveEventValue } from './utils';
Page({
    data: {
        value: '',
        money: '',
    },
    onChange: function (value, e) {
        console.log(value, e);
    },
    handleChange: function (value) {
        this.setData({
            value: resolveEventValue(value),
        });
    },
    handleMoney: function (value) {
        console.log(value);
        if (isNaN(Number(resolveEventValue(value)))) {
            return;
        }
        this.setData({
            money: resolveEventValue(value),
        });
    },
    clear: function () {
        this.setData({
            value: '',
        });
    },
    handleRef: function (input) {
        this.input = resolveEventValue(input);
    },
    clearByInputRef: function () {
        this.input.update('');
    },
});

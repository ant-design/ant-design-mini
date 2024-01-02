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
            value,
        });
    },
    handleMoney(value) {
        console.log(value);
        if (isNaN(Number(value))) {
            return;
        }
        this.setData({
            money: value,
        });
    },
    clear() {
        this.setData({
            value: '',
        });
    },
    handleRef(input) {
        this.input = input;
    },
    clearByInputRef() {
        this.input.update('');
    },
});

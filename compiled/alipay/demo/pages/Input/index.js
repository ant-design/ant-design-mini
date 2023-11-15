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
            value: value,
        });
    },
    handleMoney: function (value) {
        console.log(value);
        if (isNaN(Number(value))) {
            return;
        }
        this.setData({
            money: value,
        });
    },
    clear: function () {
        this.setData({
            value: '',
        });
    },
    handleRef: function (input) {
        this.input = input;
    },
    clearByInputRef: function () {
        this.input.update('');
    },
});

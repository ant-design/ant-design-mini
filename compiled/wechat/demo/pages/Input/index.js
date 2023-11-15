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
            value: value.detail,
        });
    },
    handleMoney: function (value) {
        console.log(value);
        if (isNaN(Number(value.detail))) {
            return;
        }
        this.setData({
            money: value.detail,
        });
    },
    clear: function () {
        this.setData({
            value: '',
        });
    },
    handleRef: function (input) {
        this.input = input.detail;
    },
    clearByInputRef: function () {
        this.input.update('');
    },
});

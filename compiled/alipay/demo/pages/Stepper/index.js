Page({
    data: {},
    onChange: function (value) {
        console.log('onChange', value);
    },
    onFocus: function (value) {
        console.log('onFocus', value);
    },
    onConfirm: function (value) {
        console.log('onConfirm', value);
    },
    onBlur: function (value) {
        console.log('onBlur', value);
    },
    handleChange: function (value) {
        console.log('onChange', value);
        this.setData({
            value: value,
        });
    },
    add: function () {
        this.setData({
            value: (this.data.value || 0) + 1,
        });
    },
    minus: function () {
        this.setData({
            value: (this.data.value || 0) - 1,
        });
    },
    clear: function () {
        this.setData({
            value: null,
        });
    },
    handleAddValue: function () {
        this.setData({ value: this.data.value + 1 });
    },
    handleMinusValue: function () {
        this.setData({ value: this.data.value - 1 });
    },
});

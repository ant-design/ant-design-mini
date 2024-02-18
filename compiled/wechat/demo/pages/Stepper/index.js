Page({
    data: {},
    onChange(value) {
        console.log('onChange', value);
    },
    onFocus(value) {
        console.log('onFocus', value);
    },
    onConfirm(value) {
        console.log('onConfirm', value);
    },
    onBlur(value) {
        console.log('onBlur', value);
    },
    handleChange(value) {
        console.log('onChange', value);
        this.setData({
            value: value.detail,
        });
    },
    add() {
        this.setData({
            value: (this.data.value || 0) + 1,
        });
    },
    minus() {
        this.setData({
            value: (this.data.value || 0) - 1,
        });
    },
    clear() {
        this.setData({
            value: null,
        });
    },
    handleAddValue() {
        this.setData({ value: this.data.value + 1 });
    },
    handleMinusValue() {
        this.setData({ value: this.data.value - 1 });
    },
});

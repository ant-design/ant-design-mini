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
            value: value.detail,
        });
    },
    handleMoney(value) {
        console.log(value);
        if (isNaN(Number(value.detail))) {
            return;
        }
        this.setData({
            money: value.detail,
        });
    },
    clear() {
        this.setData({
            value: '',
        });
    },
    handleRefInput(input) {
        this.input = input.detail;
    },
    handleRefTextArea(textArea) {
        this.textArea = textArea.detail;
    },
    clearByInputRef() {
        this.input.update('');
    },
    clearByTextAreaRef() {
        this.textArea.update('');
    },
});

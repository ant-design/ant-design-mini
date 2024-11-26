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
    handleRefInput(input) {
        this.input = input;
    },
    handleRefTextArea(textArea) {
        this.textArea = textArea;
    },
    clearByInputRef() {
        this.input.update('');
    },
    clearByTextAreaRef() {
        this.textArea.update('');
    },
});

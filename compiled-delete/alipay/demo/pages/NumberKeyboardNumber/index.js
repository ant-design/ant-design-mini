Page({
    data: {
        value: '',
        visible: false,
    },
    onNumberFocus() {
        this.setData({ visible: true });
    },
    onChange(e) {
        this.setData({ value: e ? parseFloat(e) : '' });
    },
    onClose() {
        this.setData({ visible: false });
    },
});

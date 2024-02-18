Page({
    data: {
        value: '',
        visible: false,
    },
    onNumberFocus() {
        this.setData({ visible: true });
    },
    onChange(e) {
        e = e.detail;
        this.setData({ value: e ? parseFloat(e) : '' });
    },
    onClose() {
        this.setData({ visible: false });
    },
});

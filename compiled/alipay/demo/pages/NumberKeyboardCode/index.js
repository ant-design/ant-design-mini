Page({
    data: {
        value: '',
        visible: false,
    },
    onCodeFocus() {
        this.setData({ visible: true });
    },
    onChange(e) {
        this.setData({ value: e });
        e.length === 4 && this.onClose();
    },
    onClose() {
        this.setData({ visible: false });
    },
});

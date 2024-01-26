Page({
    data: {
        value: '',
        visible: false,
    },
    onCodeFocus: function () {
        this.setData({ visible: true });
    },
    onChange: function (e) {
        e = e.detail;
        this.setData({ value: e });
        e.length === 4 && this.onClose();
    },
    onClose: function () {
        this.setData({ visible: false });
    },
});

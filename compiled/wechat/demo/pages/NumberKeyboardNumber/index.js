Page({
    data: {
        value: '',
        visible: false,
    },
    onNumberFocus: function () {
        this.setData({ visible: true });
    },
    onChange: function (e) {
        e = e.detail;
        this.setData({ value: e ? parseFloat(e) : '' });
    },
    onClose: function () {
        this.setData({ visible: false });
    },
});

Page({
    data: {
        position: '',
        basicVisible: false,
        animation: true,
        scrollVisible: false,
        closeVisible: false,
    },
    handlePopupClose: function () {
        this.setData({
            basicVisible: false,
            scrollVisible: false,
            closeVisible: false,
        });
    },
    handleShowBasic: function (e) {
        var position = e.target.dataset.position;
        this.setData({
            position: position,
            basicVisible: true,
        });
    },
    handleShowScroll: function () {
        this.setData({ scrollVisible: true });
    },
    handleChangeAnimation: function (checked) {
        this.setData({ animation: checked.detail });
    },
    handleShowClose: function () {
        this.setData({ closeVisible: true });
    },
});

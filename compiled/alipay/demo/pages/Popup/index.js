Page({
    data: {
        position: '',
        basicVisible: false,
        animation: true,
        scrollVisible: false,
        closeVisile: false,
    },
    handlePopupClose: function () {
        this.setData({
            basicVisible: false,
            scrollVisible: false,
            closeVisile: false,
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
        this.setData({ animation: checked });
    },
    handleShowClose: function () {
        this.setData({ closeVisile: true });
    },
});

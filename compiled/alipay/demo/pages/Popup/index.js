Page({
    data: {
        position: '',
        basicVisible: false,
        animation: true,
        scrollVisible: false,
        closeVisible: false,
    },
    handlePopupClose() {
        this.setData({
            basicVisible: false,
            scrollVisible: false,
            closeVisible: false,
        });
    },
    handleShowBasic(e) {
        const { position } = e.target.dataset;
        this.setData({
            position,
            basicVisible: true,
        });
    },
    handleShowScroll() {
        this.setData({ scrollVisible: true });
    },
    handleChangeAnimation(checked) {
        this.setData({ animation: checked });
    },
    handleShowClose() {
        this.setData({ closeVisible: true });
    },
});

Page({
    data: {
        position: '',
        basicVisible: false,
        animation: true,
        scrollVisible: false,
        customizeVisible: false,
        topImageVisible: false,
    },
    onClickCloseIcon() {
        this.showToast('点击了关闭icon');
        this.handlePopupClose();
    },
    onClickBackIcon() {
        this.showToast('点击了返回icon');
        this.handlePopupClose();
    },
    handlePopupClose() {
        this.setData({
            basicVisible: false,
            scrollVisible: false,
            customizeVisible: false,
            topImageVisible: false,
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
    handleShowCustomize() {
        this.setData({ customizeVisible: true });
    },
    handleShowTopImage() {
        this.setData({ topImageVisible: true });
    },
    showToast(content) {
        my.showToast({ content, duration: 1000 });
    },
});

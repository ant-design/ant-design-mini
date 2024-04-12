Page({
    data: {
        position: '',
        basicVisible: false,
        animation: true,
        scrollVisible: false,
        closeVisible: false,
    },
    onLoad() {
        setTimeout(() => {
            this.setData({
                position: 'bottom',
                basicVisible: true,
                animation: false,
            });
        }, 3000);
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

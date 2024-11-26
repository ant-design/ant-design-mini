Page({
    data: {
        basicVisible: false,
        withTitleVisible: false,
        basicTwoVisible: false,
        basicThreeVisible: false,
        focusOneVisible: false,
        focusTwoVisible: false,
        focusThreeVisible: false,
        customVisible: false,
        customBodyVisible: false,
    },
    handleOpen(e) {
        const { field } = e.target.dataset;
        this.setData({ [field]: true });
    },
    handleClose() {
        this.setData({
            basicVisible: false,
            withTitleVisible: false,
            basicTwoVisible: false,
            basicThreeVisible: false,
            focusOneVisible: false,
            focusTwoVisible: false,
            focusThreeVisible: false,
            customVisible: false,
            customBodyVisible: false,
        });
    },
    handlePrimaryButtonTap() {
        this.handleClose();
        this.showToast('点击主要按钮');
    },
    handleSecondaryButtonTap() {
        this.handleClose();
        this.showToast('点击辅助按钮');
    },
    handleCancelButtonTap() {
        this.handleClose();
        this.showToast('点击取消按钮');
    },
    showToast(content) {
        my.showToast({ content, duration: 1000 });
    },
});

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
    handleOpen: function (e) {
        var _a;
        var field = e.target.dataset.field;
        this.setData((_a = {}, _a[field] = true, _a));
    },
    handleClose: function () {
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
    handlePrimaryButtonTap: function () {
        this.handleClose();
        this.showToast('点击主要按钮');
    },
    handleSecondaryButtonTap: function () {
        this.handleClose();
        this.showToast('点击辅助按钮');
    },
    handleCancelButtonTap: function () {
        this.handleClose();
        this.showToast('点击取消按钮');
    },
    showToast: function (content) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        wx.showToast({
            title: content,
        });
    },
});

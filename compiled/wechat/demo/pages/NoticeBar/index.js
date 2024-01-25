Page({
    data: {
        typeList: ['default', 'error', 'info', 'primary'],
    },
    handleTapAction: function () {
        this.showToast('点击按钮');
    },
    handleTapLink: function () {
        this.showToast('link 类型被点击了');
    },
    handleClose: function () {
        this.showToast('点击关闭');
    },
    showToast: function (content) {
        //@ts-ignore
        wx.showToast({
            title: content,
        });
    },
});

Page({
    handleTap() {
        //@ts-ignore
        wx.showToast({
            title: '点击按钮',
        });
    },
    handleDisabledTap() {
        //@ts-ignore
        wx.showToast({
            title: '禁用点击',
        });
    },
});

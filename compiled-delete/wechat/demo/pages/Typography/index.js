Page({
    data: {},
    handleTap(e) {
        const { type, text } = e.currentTarget.dataset;
        if (type === 'copy') {
            // @ts-ignore
            wx.setClipboardData({
                data: text,
                success() {
                    // @ts-ignore
                    wx.showToast({ title: `复制成功` });
                },
            });
            return;
        }
        // @ts-ignore
        wx.showToast({ title: `点击${type}` });
    },
    handleDisabledTap(e) {
        const { type } = e.currentTarget.dataset;
        // @ts-ignore
        wx.showToast({ title: `禁用状态下点击${type}` });
    },
});

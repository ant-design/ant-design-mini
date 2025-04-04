Page({
  data: {},
  handleTap(e) {
    const { type, text } = e.currentTarget.dataset;
    /// #if ALIPAY || BUNDLE2H
    if (type === 'copy') {
      my.setClipboard({
        text,
        success() {
          my.showToast({ type: 'success', content: `复制成功` });
        },
      });
      return;
    }
    my.alert({ content: `点击${type}` });
    /// #endif

    /// #if WECHAT
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
    /// #endif
  },
  handleDisabledTap(e) {
    const { type } = e.currentTarget.dataset;
    /// #if ALIPAY || BUNDLE2H
    my.alert({ content: `禁用状态下点击${type}` });
    /// #endif
    /// #if WECHAT
    // @ts-ignore
    wx.showToast({ title: `禁用状态下点击${type}` });
    /// #endif
  },
});

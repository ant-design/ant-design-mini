Page({
  handleTap() {
    /// #if ALIPAY || BUNDLE2H
    my.alert({
      title: '点击按钮',
    });
    /// #endif

    /// #if WECHAT
    //@ts-ignore
    wx.showToast({
      title: '点击按钮',
    });
    /// #endif
  },
  handleDisabledTap() {
    /// #if ALIPAY || BUNDLE2H
    my.alert({
      title: '禁用点击',
    });
    /// #endif

    /// #if WECHAT
    //@ts-ignore
    wx.showToast({
      title: '禁用点击',
    });
    /// #endif
  },
});

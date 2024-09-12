Page({
  handleTap() {
    /// #if ALIPAY
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
    /// #if ALIPAY
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

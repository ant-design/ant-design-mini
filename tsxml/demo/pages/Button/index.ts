Page({
  handleTap(e) {
    /// #if ALIPAY
    my.alert({
      title: '点击按钮',
    });
    /// #endif

    /// #if WECHAT
    wx.showToast({
      title: '点击按钮',
    });
    /// #endif
  },
});

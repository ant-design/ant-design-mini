Page({
  handleTap(e) {
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
});

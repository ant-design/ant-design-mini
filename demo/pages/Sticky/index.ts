Page({
  data: {
    stickyStatus: false,
    stickyStatus1: false,
  },
  handleStickyChange(status) {
    /// #if ALIPAY
    this.setData({ stickyStatus: status });
    /// #endif
    /// #if WECHAT
    this.setData({ stickyStatus: status.detail });
    /// #endif
  },
  handleStickyChange1(status) {
    /// #if ALIPAY
    this.setData({ stickyStatus1: status });
    /// #endif
    /// #if WECHAT
    this.setData({ stickyStatus1: status.detail });
    /// #endif
  },
});

Page({
  data: {
    loading: true,
    showTyping: true,
    basicActions: [
      {
        label: 'copy',
        icon: 'TextOutline',
      },
      {
        label: 'like',
        icon: 'LikeOutline',
      },
    ],
  },
  onTypingComplete() {
    console.log('typing complete at', Date.now());
  },
  onTypingChange(e) {
    this.setData({
      showTyping: !this.data.showTyping,
    });
  },
  onSwitchChange() {
    this.setData({
      loading: !this.data.loading,
    });
  },
  handleTapAction(item) {
    /// #if WECHAT
    // @ts-ignore
    item = item.detail;
    /// #endif
    /// #if ALIPAY || ALIPAYNATIVE
    my.showToast({
      content: `${item.label} tapped`,
    });
    /// #endif
    /// #if WECHAT
    // @ts-ignore
    wx.showToast({
      title: `${item.label} tapped`,
    });
    /// #endif
  },
});

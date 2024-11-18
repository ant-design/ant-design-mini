Page({
  data: {
    foldStatus: false,
    titleSticky: false,
  },
  handleLinkClick() {
    /// #if ALIPAY
    my.showToast({ content: '被点击了' });
    /// #endif
    /// #if WECHAT
    // @ts-ignore
    wx.showToast({ title: '被点击了' });
    /// #endif
  },
  handleTapFoldBtn() {
    console.log('收起展开态发生变化');
    this.setData({ foldStatus: !this.data.foldStatus });
  },
  handleTitleSticky(status) {
    this.setData({ titleSticky: status });
  },
});

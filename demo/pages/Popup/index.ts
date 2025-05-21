Page({
  data: {
    position: '',
    basicVisible: false,
    animation: true,
    scrollVisible: false,
    customizeVisible: false,
    topImageVisible: false,
  },
  onClickBack() {
    this.showToast('点击了返回icon');
  },
  handlePopupClose() {
    this.setData({
      basicVisible: false,
      scrollVisible: false,
      customizeVisible: false,
      topImageVisible: false,
    });
  },
  handleShowBasic(e) {
    const { position } = e.target.dataset;
    this.setData({
      position,
      basicVisible: true,
    });
  },
  handleShowScroll() {
    this.setData({ scrollVisible: true });
  },
  handleChangeAnimation(checked) {
    /// #if ALIPAY || ALIPAYNATIVE
    this.setData({ animation: checked });
    /// #endif

    /// #if WECHAT
    this.setData({ animation: checked.detail });
    /// #endif
  },
  handleShowCustomize() {
    this.setData({ customizeVisible: true });
  },
  handleShowTopImage() {
    this.setData({ topImageVisible: true });
  },
  showToast(content) {
    /// #if ALIPAY || ALIPAYNATIVE
    my.showToast({ content, duration: 1000 });
    /// #endif

    /// #if WECHAT
    // @ts-ignore
    wx.showToast({ content, duration: 1000 });
    /// #endif
  },
});

Page({
  data: {
    visible: true,
    url: 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ',
  },
  handleVisibleChange(visible, e) {
    console.log(visible, e);
    /// #if WECHAT
    this.setData({ visible: visible.detail });
    /// #endif

    /// #if ALIPAY
    this.setData({ visible });
    /// #endif
  },
  handleTapItem(e) {
    console.log(e);
    this.setData({ visible: false });

    /// #if ALIPAY
    my.showToast({ content: '点击列表', duration: 1000 });
    /// #endif
  },
});

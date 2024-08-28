Page({
  data: {
    visible: true,
    visible1: true,
    visible2: true,
    list: [{
      text: '扫一扫',
      icon: 'ScanningOutline',
      showBadge: true,
      id: 'scan',
    }, {
      text: '付钱/收钱',
      icon: 'ReceivePaymentOutline',
      showBadge: false,
      id: 'pay',
    }, {
      text: '乘车码',
      icon: 'TransportQRcodeOutline',
      showBadge: false,
      id: 'code',
    }, {
      text: '图片',
      iconImage: 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ',
      showBadge: false,
      id: 'image',
    }],
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
  handleVisibleChange1(visible, e) {
    console.log(visible, e);
    /// #if WECHAT
    this.setData({ visible1: visible.detail });
    /// #endif

    /// #if ALIPAY
    this.setData({ visible1: visible });
    /// #endif
  },
  handleVisibleChange2(visible, e) {
    console.log(visible, e);
    /// #if WECHAT
    this.setData({ visible2: visible.detail });
    /// #endif

    /// #if ALIPAY
    this.setData({ visible2: visible });
    /// #endif
  },
  handleTapItem(e, item) {
    console.log(e, item);
    this.setData({ visible: false });

    /// #if ALIPAY
    my.showToast({ content: '点击列表', duration: 1000 });
    /// #endif
  },
  handleTapItem1(e, item) {
    console.log(e, item);
    this.setData({ visible1: false });

    /// #if ALIPAY
    my.showToast({ content: '点击列表', duration: 1000 });
    /// #endif
  },
  handleTapItem2(e, item) {
    console.log(e, item);
    this.setData({ visible2: false });

    /// #if ALIPAY
    my.showToast({ content: '点击列表', duration: 1000 });
    /// #endif
  },
});

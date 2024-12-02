Page({
  data: {
    links1: [
      {
        key: 'alipay',
        text: '支付宝',
      },
    ],
    links2: [
      {
        key: 'alicloud',
        text: '阿里云',
      },
      {
        key: 'alipay',
        text: '支付宝',
      },
    ],
    chips: [
      {
        key: 'jiebei',
        text: '蚂蚁借呗',
      },
      {
        key: 'beiyongjin',
        text: '备用金',
      },
      {
        key: 'huabei',
        text: '花呗收钱',
        disabled: true,
      },
    ],
  },

  handleLinkTap(item) {
    if (item.disabled) return;
    /// #if ALIPAY
    my.showToast({ content: item.key });
    /// #endif
    /// #if WECHAT
    // @ts-ignore
    wx.showToast({
      title: item.key,
    });
    /// #endif
  },
  handleChipTap(item) {
    if (item.disabled) return;
    /// #if ALIPAY
    my.showToast({ content: item.key });
    /// #endif
    /// #if WECHAT
    // @ts-ignore
    wx.showToast({
      title: item.key,
    });
    /// #endif
  },
});

Page({
  data: {
    value: 80,
  },
  onChange(value, e) {
    console.log('slider changed:', value, e);
  },
  onAfterChange(value, e) {
    console.log('当前值:', value, e);
    /// #if ALIPAY || ALIPAYNATIVE
    my.showToast({
      content: 'value: ' + value,
    });
    /// #endif

    /// #if WECHAT
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    wx.showToast({
      title: `value: ${value.detail}`,
    });
    /// #endif
  },
  handleChange(value, e) {
    console.log('slider changed:', value, e);

    /// #if WECHAT
    this.setData({
      value: value.detail,
    });
    /// #endif

    /// #if ALIPAY || ALIPAYNATIVE
    this.setData({
      value,
    });
    /// #endif
  },
});

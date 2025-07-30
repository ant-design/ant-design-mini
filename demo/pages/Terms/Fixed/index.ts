Page({
  data: {
    buttons: [
      {
        text: '同意协议 + 行动点描述',
        type: 'primary',
      },
      {
        text: '取消',
        aide: true,
        type: 'default',
      },
    ],
    terms: [
      {
        name: '《用户协议》',
        key: 'user',
      },
    ],
  },
  handleButtonTap(item, index, checked, event) {
    /// #if ALIPAY
    console.log(item, index, checked, event);
    my.showToast({ content: `点击了第 ${index + 1} 个按钮` });
    /// #endif
    /// #if WECHAT
    // @ts-ignore
    wx.showToast({ title: `点击了第 ${item.detail[1] + 1} 个按钮` });
    /// #endif
  },
  handleTermTap(item, index, event) {
    /// #if ALIPAY
    console.log(item, index, event);
    my.showToast({ content: `点击了第 ${index + 1} 个协议` });
    /// #endif
    /// #if WECHAT
    // @ts-ignore
    wx.showToast({ title: `点击了第 ${item.detail[1] + 1} 个协议` });
    /// #endif
  },
});

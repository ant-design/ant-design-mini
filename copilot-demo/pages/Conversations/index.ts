Page({
  data: {},
  onItemTap(i) {
    let item = i;
    /// #if ALIPAY
    console.log(item);
    my.showToast({ content: item.key });
    /// #endif
    /// #if WECHAT
    item = i.detail[0];
    console.log(item);
    // @ts-ignore
    wx.showToast({ title: item.key });
    /// #endif
  },
});

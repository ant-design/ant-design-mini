Page({
  handleTap(e) {
    console.log(e);
    /// #if ALIPAY
    my.alert({
      title: '点击按钮',
    });
    /// #endif
  },
});

Page({
  data: {
    radius: false,
  },
  handleTap(e) {
    /// #if ALIPAY
    my.alert({
      title: 'onTap',
      content: e.currentTarget.dataset.info,
    });
    /// #endif

    console.log(e);
  },
  handleSetRadius(checked) {
    this.setData({
      radius: checked,
    });
  },
});

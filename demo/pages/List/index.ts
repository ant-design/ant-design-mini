Page({
  data: {
    radius: false,
  },
  handleTap(e) {
    /// #if ALIPAY || ALIPAYNATIVE
    my.alert({
      title: 'onTap',
      content: e.currentTarget.dataset.info,
    });
    /// #endif

    console.log(e);
  },
  catchTap(e) {
    /// #if ALIPAY || ALIPAYNATIVE
    my.alert({
      title: 'catchTap',
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

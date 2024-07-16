Page({
  data: {
    current: 0,
    items: [
      {
        title: '水果',
        subTitle: '描述文案',
        content: '西瓜',
      },
      {
        title: '蔬菜',
        subTitle: '描述文案',
        badge: true,
        content: '西红柿',
      },
      {
        title: '动物',
        subTitle: '描述文案',
        content: '蚂蚁',
      },
    ],
    items2: [
      {
        title: '水果',
        subTitle: '描述文案',
        content: '西瓜',
      },
      {
        title: '蔬菜',
        subTitle: '描述文案',
        content: '西红柿',
        disabled: true,
      },
      {
        title: '动物',
        subTitle: '描述文案',
        content: '蚂蚁',
      },
    ],
  },
  onChange(current) {
    /// #if WECHAT
    current = current.detail;
    /// #endif
    this.alert('current ' + current);
  },
  handleChange(current) {
    /// #if WECHAT
    current = current.detail;
    /// #endif

    this.setData({
      current,
    });
  },
  onPlus() {
    this.alert('plus');
  },
  alert(content) {
    /// #if ALIPAY
    my.alert({
      title: content,
    });
    /// #endif

    /// #if WECHAT
    //@ts-ignore
    wx.showToast({
      title: content,
    });
    /// #endif
  },
});

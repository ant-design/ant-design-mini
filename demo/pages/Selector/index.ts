Page({
  data: {
    items1: [
      { text: '选项一', value: '1' },
      { text: '选项二', value: '2' },
      { text: '选项三', value: '3' },
    ],
    items2: [
      { text: '选项一', subText: '描述文案一', value: '1' },
      { text: '选项二', subText: '描述文案二', value: '2' },
      { text: '选项三', subText: '描述文案三', value: '3' },
    ],
    items3: [
      { text: '选项一', subText: '描述文案一', value: '1' },
      { text: '选项二', subText: '描述文案二', value: '2', disabled: true },
      { text: '选项三', subText: '描述文案三', value: '3' },
    ],
    value: '1',
  },
  handleChangeValue() {
    this.setData({
      value: '3',
    });
  },
  handleChange(value, items, e) {
    /// #if WECHAT
    this.setData({
      value: value.detail[0],
    });
    /// #endif
    /// #if ALIPAY
    this.setData({
      value,
    });
    /// #endif
    console.log(value, items, e);
  },
  onSelectMin(value, item) {
    console.log(value, item);

    /// #if WECHAT
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    wx.showModal({
      content: '不允许清空',
    });
    /// #endif

    /// #if ALIPAY
    my.alert({ content: '不允许清空' });
    /// #endif
  },
});

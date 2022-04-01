Page({
  data: {
    value: false,
    sizeList: ['medium', 'small', 'x-small'],
  },
  handleChangeNoControl(e) {
    my.alert({
      title: `当前 switch 为 ${e ? '打开' : '关闭'} 状态。`,
    });
  },
  handleChangeValue(e) {
    this.setData({
      value: e,
    });
  },
});

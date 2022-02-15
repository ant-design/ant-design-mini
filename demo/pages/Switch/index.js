Page({
  data: {
    value: false,
    sizeList: ['medium', 'small', 'x-small'],
  },
  switchChange(e) {
    my.alert({
      title: `当前 switch 为 ${e ? '打开' : '关闭'} 状态。`,
    });
  },
  changeValue(e) {
    this.setData({
      value: e,
    });
  },
});

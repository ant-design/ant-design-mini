Page({
  data: {
    visible: true,
  },
  onTap() {
    this.setData({
      visible: !this.data.visible,
    });
  },
  onClose() {
    my.alert({
      content: '组件关闭',
    });
  },
});

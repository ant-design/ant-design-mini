Page({
  data: {
    actionsText2: ['不再提示', '查看详情'],
    typeList: ['default', 'error', 'info', 'primary'],
  },
  handleTapAction(e) {
    my.alert({
      title: `当前点击的是 actions 中的第 ${e} 个元素。`,
    });
  },
  handleTapLink() {
    my.alert({
      title: 'link 类型被点击了。',
    });
  },
  handleClose() {
    my.alert({
      title: '点击关闭',
    });
  },
});

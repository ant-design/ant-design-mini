Page({
  data: {
    actionsText1: ['不再提示'],
    actionsText2: ['不再提示', '查看详情'],
    typeList: ['default', 'error', 'info', 'primary'],
  },
  onActionTap(e) {
    my.alert({
      title: `当前点击的是 actions 中的第 ${e} 个元素。`,
    });
  },
  clickClose() {
    my.alert({
      title: '点击了关闭 icon。',
    });
  },
  clickPress() {
    my.alert({
      title: 'link 类型被点击了。',
    });
  },
});

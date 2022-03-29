Page({
  data: {},
  handleSelectTerm(checked) {
    my.showToast({
      content: `当前选中状态为：${checked}`,
    });
  },
  handleTapMainBtn() {
    my.alert({
      content: '同意授权',
    });
  },
  handleTapSubBtn() {
    my.alert({
      content: '取消',
    });
  },
});

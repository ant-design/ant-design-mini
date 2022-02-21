Page({
  data: {
    fixed: true,
    checkboxShow: true,
  },
  selectTerm(checked) {
    my.alert({
      title: `当前选中状态为：${checked}`,
    });
  },
  changeFixed(e) {
    this.setData({
      fixed: e.detail.value,
    });
  },
  changeCheckboxShow(e) {
    this.setData({
      checkboxShow: e.detail.value,
    });
  },
  onMainBtnTap() {
    my.alert({
      content: '同意授权',
    });
  },
  onSubBtnTap() {
    my.alert({
      content: '取消',
    });
  },
});

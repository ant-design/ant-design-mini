Page({
  data: {
    list: [
      { type: 'default' },
      { type: 'primary' },
      { type: 'warn' },
      { type: 'danger' },
      { type: 'success' },
      { type: 'light' },
    ],
    title: '按钮操作 Normal',
    subText: '',
    disabled: false,
    showLoading: false,
  },
  onDisableChange(e) {
    this.setData({
      disabled: e,
    });
  },
  onLoadingChange(e) {
    this.setData({
      showLoading: e,
      loadingChangeValue: e,
    });
  },
  onShowSubText(e) {
    if (e) {
      this.setData({
        subText: '副标题',
      });
    } else {
      this.setData({
        subText: '',
      });
    }
  },
});

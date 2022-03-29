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
    disabled: false,
    showLoading: false,
  },
  handleChangeDisabled(checked) {
    this.setData({ disabled: checked });
  },
  handleChangeShowLoading(checked) {
    this.setData({ showLoading: checked });
  },
});

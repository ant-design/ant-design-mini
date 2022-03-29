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
    fillList: [
      { value: 'solid', label: 'solid', checked: true },
      { value: 'outline', label: 'outline' },
      { value: 'none', label: 'none' },
    ],
    fill: 'solid',
    showSubText: false,
    disabled: false,
    showLoading: false,
    icon: '',
  },
  handleChangeShowSubText(checked) {
    this.setData({ showSubText: checked });
  },
  handleChangeDisabled(checked) {
    this.setData({ disabled: checked });
  },
  handleChangeShowLoading(checked) {
    this.setData({ showLoading: checked });
  },
  handleChangeFill(e) {
    this.setData({
      fill: e.detail.value,
    });
  },
});

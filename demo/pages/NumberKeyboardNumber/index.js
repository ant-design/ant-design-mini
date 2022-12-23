Page({
  data: {
    value: '',
    visible: false,
  },
  onNumberFocus() {
    this.setData({ visible: true });
  },
  onChange(e) {
    this.setData({ value: e ? parseFloat(e) : '' });
  },
  onVisibleChange() {
    this.setData({ visible: false });
  },
});

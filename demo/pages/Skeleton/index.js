Page({
  data: {
    showLoading: true,
  },
  handleToggleShowLoading() {
    this.setData({ showLoading: !this.data.showLoading });
  },
});

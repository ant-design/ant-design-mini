Page({
  data: {
    radius: false,
  },
  handleTap(e) {
    my.alert({
      title: 'onTap',
      content: e.currentTarget.dataset.info,
    });
  },
  handleSetRadius(checked) {
    this.setData({
      radius: checked,
    });
  },
});

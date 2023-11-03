Page({
  data: {
    visible: true,
    placements: [
      'top',
      'bottom',
      'left',
      'right',
      'top-left',
      'top-right',
      'left-top',
      'left-bottom',
      'bottom-left',
      'bottom-right',
      'right-top',
      'right-bottom',
    ],
  },
  onVisibleChange(visible, e) {
    console.log('onVisibleChange', visible, e);
  },
  handleVisibleChange() {
    this.setData({
      visible: !this.data.visible,
    });
  },
});

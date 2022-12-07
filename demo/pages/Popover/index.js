Page({
  data: {
    placements: [
      'top',
      'top-right',
      'top-left',
      'bottom',
      'bottom-left',
      'bottom-right',
      'left',
      'left-top',
      'left-bottom',
      'right',
      'right-top',
      'right-bottom',
    ],
  },
  handleVisibleChange(visible, e) {
    console.log('onVisibleChange', visible, e);
  },
  handleToggleMask() {
    this.setData({
      showMask: !this.data.showMask,
    });
  },
});

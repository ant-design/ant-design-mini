const placement = [
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
];
Page({
  data: {
    placement: placement[0],
  },
  handleNextPosition() {
    let index = placement.indexOf(this.data.placement);
    index = index >= placement.length - 1 ? 0 : index + 1;
    this.setData({
      show: true,
      placement: placement[index],
    });
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

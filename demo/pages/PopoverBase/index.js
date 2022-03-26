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
    show: true,
    showLight: true,
    showDark: true,
  },
  handleLightVisibleChange(e) {
    this.setData({
      showLight: e,
    });
  },
  handleDarkVisibleChange(e) {
    this.setData({
      showDark: e,
    });
  },
  handleNextPosition() {
    let index = placement.indexOf(this.data.placement);
    index = index >= placement.length - 1 ? 0 : index + 1;
    this.setData({
      placement: placement[index],
    });
  },
  handleVisibleChange(e) {
    this.setData({
      show: e,
    });
  },
});

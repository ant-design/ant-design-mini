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
    showMask: false,
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
      show: true,
      placement: placement[index],
    });
  },
  handleVisibleChange(visible, mode) {
    this.setData({
      show: visible,
    });
    if (mode === 'mask') {
      my.showToast({ content: '点击mask关闭', duration: 2000 });
    }
  },
  handleToggleMask() {
    this.setData({
      showMask: !this.data.showMask,
    });
  },
});

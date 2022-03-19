const placement = ['top', 'top-right', 'top-left', 'bottom', 'bottom-left', 'bottom-right', 'left', 'left-top', 'left-bottom', 'right', 'right-top', 'right-bottom'];
Page({
  data: {
    placement: placement[0],
    show: false,
    showMask: true,
  },
  onNextPositionTap() {
    let index = placement.indexOf(this.data.placement);
    index = index >= placement.length - 1 ? 0 : index + 1;
    this.setData({
      show: true,
      placement: placement[index],
    });
  },
  onVisibleChange(visible, mode) {
    this.setData({
      show: visible,
    });
    if (mode==='mask') {
      my.showToast({content: '点击mask关闭', duration:1000 });
    }
  },
  onToggleMask(){
    this.setData({
      showMask: !this.data.showMask,
    });
  },
});

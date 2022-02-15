Page({
  data: {
    activeIndex: 1,
    failIndex: 0,
    showNumberSteps: true,
    direction: 'vertical',
    activeIcon1: 'CheckCircleFill',
    activeIcon2: 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ',
  },
  nextStep() {
    this.setData({
      activeIndex: this.data.activeIndex + 1,
    });
  },
  preStep() {
    this.setData({
      activeIndex: this.data.activeIndex - 1,
    });
  },
  setFailIndex() {
    this.setData({
      failIndex: !this.data.failIndex,
    });
  },
  directionChange() {
    if (this.data.direction !== 'horizontal') {
      this.setData({
        direction: 'horizontal',
      });
    } else {
      this.setData({
        direction: 'vertical',
      });
    }
  },
});

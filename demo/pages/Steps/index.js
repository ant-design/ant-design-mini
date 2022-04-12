Page({
  data: {
    activeIndex: 1,
    failIndex: false,
    showNumberSteps: true,
    direction: 'vertical',
    activeIcon1: 'CheckCircleFill',
    activeIcon2:
      'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ',
  },
  handleNextStep() {
    this.setData({
      activeIndex: this.data.activeIndex + 1,
    });
  },
  handlePreStep() {
    this.setData({
      activeIndex: this.data.activeIndex - 1,
    });
  },
  handleSetFailIndex() {
    this.setData({
      failIndex: !this.data.failIndex,
    });
  },
});

Page({
  data: {
    items: [
      {
        title: '步骤一',
        description: '描述信息',
      },
      {
        title: '步骤二',
        description: '描述信息',
      },
      {
        title: '步骤三',
        description: '描述信息',
      }
    ],
    iconList: [
      'SmileFill',
      '',
      'StarFill'
    ],
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

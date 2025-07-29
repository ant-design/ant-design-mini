Page({
  data: {
    current: 0,
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
      },
    ],
    iconList: ['SmileFill', '', 'StarFill'],
    items2: [
      {
        title: '步骤一',
        description: '内容详情，根据实际文案安排根据实际文案安排',
      },
      {
        title: '步骤二',
        description: '描述信息',
      },
      {
        title: '步骤三',
        description: '',
      },
      {
        title: '步骤四',
        description: '内容详情，根据实际文案安排',
      },
    ],
  },
  onNextTap() {
    if (this.data.current === this.data.items.length - 1) {
      /// #if ALIPAY
      my.showToast({ content: '完成', duration: 1000 });
      /// #endif
      /// #if WECHAT
      // @ts-ignore
      wx.showToast({ title: '完成' });
      /// #endif
      return;
    }
    this.setData({
      current: this.data.current + 1,
    });
  },
  onPrevTap() {
    if (this.data.current === 0) {
      return;
    }
    this.setData({
      current: this.data.current - 1,
    });
  },
});

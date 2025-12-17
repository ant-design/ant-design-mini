Page({
  data: {
    controlledSwipe: '',
    rightBtns: [
      {
        text: '取消关注',
        bgColor: '#CCCCCC',
        color: '#fff',
        width: 200,
      },
      {
        text: '免打扰',
        bgColor: '#1677FF',
        color: '#fff',
        width: 170,
      },
      {
        text: '删除',
        bgColor: '#FF2B00',
        color: '#fff',
        width: 140,
      },
    ],
    leftBtns: [
      {
        text: '往来记录',
        bgColor: '#1677FF',
        color: '#fff',
      },
      {
        text: '设为常用',
        bgColor: '#FFA91B',
        color: '#fff',
      },
      {
        text: '删除',
        bgColor: '#FF2B00',
        color: '#fff',
      },
    ],
    rightBtnsWithConfirm: [
      {
        text: '设为常用',
        bgColor: '#1677FF',
        color: '#fff',
      },
      {
        text: '往来记录',
        bgColor: '#FFA91B',
        color: '#fff',
      },
      {
        text: '删除',
        bgColor: '#FF2B00',
        color: '#fff',
        confirmType: 'tap',
        confirmText: '确认删除吗?',
      },
    ],
    rightBtnsWithMove: [
      {
        text: '设为常用',
        bgColor: '#1677FF',
        color: '#fff',
      },
      {
        text: '往来记录',
        bgColor: '#FFA91B',
        color: '#fff',
      },
      {
        text: '删除',
        bgColor: '#FF2B00',
        color: '#fff',
        confirmType: 'move',
        confirmText: '确认删除吗?',
      },
    ],
    swipeIndex: -1,
  },

  onSwipeStart() {
    this.setData({ swipeIndex: '' });
  },
  onSwipeEnd(args1, args2) {
    let e, data;
    /// #if WECHAT
    e = args1;
    data = args1.detail;
    /// #endif

    /// #if ALIPAY
    e = args2;
    data = args1;
    /// #endif

    const { index } = e.target.dataset.item;
    data.swiped && this.setData({ swipeIndex: index });
  },
  onButtonTap(data, e) {
    console.log(data, e);
  },
  onControlSwipe(e) {
    const { direction } = e.currentTarget.dataset;
    this.setData({
      controlledSwipe: direction,
    });
  },
});

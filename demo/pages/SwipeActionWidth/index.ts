Page({
  data: {
    rightBtns: [
      {
        text: '设为常用',
        bgColor: '#1677FF',
        color: '#fff',
        width: 170,
      },
      {
        text: '往来记录',
        bgColor: '#FFA91B',
        color: '#fff',
        width: 170,
      },
      {
        text: '删除',
        bgColor: '#FF2B00',
        color: '#fff',
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
});

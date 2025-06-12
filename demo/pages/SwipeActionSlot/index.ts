Page({
  data: {
    rightBtns: [
      {
        text: 'No Slot',
        bgColor: '#1677FF',
        color: '#fff',
      },
      {
        text: '重命名',
        bgColor: '#FFA91B',
        color: '#fff',
        slotName: 'reName',
        confirmType: 'tap',
        confirmText: '确认修改吗？',
      },
      {
        text: '删除',
        bgColor: '#FF2B00',
        color: '#fff',
        slotName: 'delete',
        confirmType: 'tap',
        confirmText: '确认删除吗？',
      },
    ],
    leftBtns: [
      {
        text: 'No Slot',
        bgColor: '#1677FF',
        color: '#fff',
      },
      {
        text: '重命名',
        bgColor: '#FFA91B',
        color: '#fff',
        width: 300,
        slotName: 'reName-left',
        confirmType: 'tap',
        confirmText: '确认修改吗？',
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

    /// #if ALIPAY || ALIPAYNATIVE
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

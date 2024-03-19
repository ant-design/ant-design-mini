Page({
  data: {
    rightBtns: [
      {
        text: '重命名',
        bgColor: '#FFA91B',
        color: '#fff',
        slotName: 'reName',
        confirmType: 'tap',
        confirmText: '确认修改吗？'
      },
      {
        text: '删除',
        bgColor: '#FF2B00',
        color: '#fff',
        slotName: 'delete',
        confirmType: 'tap',
        confirmText: '确认删除吗？'
      },

    ],
    swipeIndex: -1,
  },
  onSwipeStart() {
    this.setData({ swipeIndex: '' });
  },
  onSwipeEnd(args1, args2) {
    let e, data;
    e = args2;
    data = args1;
    const { index } = e.target.dataset.item;
    data.swiped && this.setData({ swipeIndex: index });
  },
  onButtonTap(data, e) {
    console.log(data, e);
  },
});

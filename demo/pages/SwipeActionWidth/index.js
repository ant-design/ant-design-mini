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
    swipeIndex: -1
  },
  onSwipeStart() {
    this.setData({ swipeIndex: '' });
  },
  onSwipeEnd(e, data) {
    const { index } = e.target.dataset.item;
    data.swiped && this.setData({ swipeIndex: index });
  },
});
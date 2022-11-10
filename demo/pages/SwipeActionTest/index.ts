Page({
  data: {
    items: [
      {
        id: '1',
        text: '这是一段内容哦~'
      },
      {
        id: '2',
        text: '这是一段内容哦~'
      },
      {
        id: '3',
        text: '这是一段内容哦~'
      },
    ],
    right: [
      {
        type: 'delete',
        text: '删除',
        bgColor: '#FF2B00',
        color: '#fff',
      },
      {
        type: 'set',
        text: '编辑',
        bgColor: '#1677FF',
        color: '#fff',
      }
    ],
    swipeStr: '',
  },
  onSwipeEnd(key: string) {
    this.setData({ swipeStr: key });
  },
  onSwipeStart() {
    this.setData({ swipeStr: ''});
  },
  onRightItemEvent(type: string, key: string, callbackData: any) {
    console.log('type, key, callbackData', type, key, callbackData);
    my.showToast({ content: `right: ${key}-${type}` });
  },
});

Page({
  data: {
    set: {
      text: '设为常用',
      bgColor: '#1677FF',
      color: '#fff',
    },
    del: {
      text: '删除',
      bgColor: '#FF2B00',
      color: '#fff',
    },
    his: {
      text: '往来记录',
      bgColor: '#FFA91B',
      color: '#fff',
    },
    setTap: {
      text: '设为常用',
      bgColor: '#1677FF',
      color: '#fff',
      confirmType: 'tap',
      confirmText: '确认设为常用吗?'
    },
    delTap: {
      text: '删除',
      bgColor: '#FF2B00',
      color: '#fff',
      confirmType: 'tap',
      confirmText: '确认删除吗?'
    },
    hisTap: {
      text: '往来记录',
      bgColor: '#FFA91B',
      color: '#fff',
      confirmType: 'tap',
      confirmText: '确认往来记录吗?'
    },
    moveTap: {
      text: '删除',
      bgColor: '#FF2B00',
      color: '#fff',
      confirmType: 'move',
      confirmText: '确认删除吗?'
    }
  },
  onSwipeStart() {},
  onSwipeEnd() {},
  onButtonTap() {},
});
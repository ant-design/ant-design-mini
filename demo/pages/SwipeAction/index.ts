Page({
  data: {
    baseList: [
      {
        detail: '左滑-单按钮',
        event: {
          key: 'r-s1',
          itemWidth: 300,
          right: [
            {
              type: 'delete',
              text: '删除',
              bgColor: '#FF2B00',
              color: '#fff',
            }
          ]
        }
      },
      {
        detail: '左滑-双按钮',
        event: {
          key: 'r-s2',
          itemWidth: 180,
          right: [
            {
              type: 'set',
              text: '设为常用',
              bgColor: '#1677FF',
              color: '#fff',
            },
            {
              type: 'delete',
              text: '删除',
              bgColor: '#FF2B00',
              color: '#fff',
            }
          ]
        }
      },
      {
        detail: '左滑-三按钮',
        event: {
          key: 'r-s3',
          itemWidth: 150,
          right: [
            {
              type: 'set',
              text: '设为常用',
              bgColor: '#1677FF',
              color: '#fff',
            },
            {
              type: 'his',
              text: '往来记录',
              bgColor: '#FFA91B',
              color: '#fff',
            },
            {
              type: 'delete',
              text: '删除',
              bgColor: '#FF2B00',
              color: '#fff',
            }
          ]
        }
      }
    ],
    swipeStr: '',
    list: [
      { value: 'left', label: '左侧' },
      { value: 'right', label: '右侧' },
      { value: 'two', label: '左、右测' },
    ],
    type: 'left', // 位置
    check: 'none', // 确认效果
    checkList: [
      { value: 'none', label: '无' },
      { value: 'tap', label: '点击' },
      { value: 'move', label: '滑动' },
    ],
    inertia: true, // 回弹
    damping: 60,
  },
  // 位置
  handleChange(value) {
    this.setData({ type: value, swipeStr: '' });
    const { baseList } = this.data;
    const _baseList = baseList.map(u => {
      let _event = {};
      let _detail = '';
      if (value === 'left') {
        _event = Object.assign({}, u.event, { left: u.event.left || u.event.right, right: null });
        _detail = '左滑-';
      }
      if (value === 'right') {
        _event = Object.assign({}, u.event, { right: u.event.left || u.event.right, left: null });
        _detail = '右滑-';
      }
      if (value === 'two') {
        const _arr = u.event.left || u.event.right;
        _event = Object.assign({}, u.event, { right: _arr, left: _arr });
        _detail = '左、右滑-';
      }
      return Object.assign({}, u, { detail: _detail + u.detail.split('-')[1], event: _event });
    });
    this.setData({ baseList: _baseList });
  },
  // 确认效果
  handleChangeCheck(value) {
    this.setData({ check: value, swipeStr: '' });
    const { baseList } = this.data;
    const _baseList = baseList.map(u => {
      let _left = null;
      let _right = null;
      const eventType = value === 'tap' ? 'auto' : (value === 'move' ? 'move' : '');
      if (u.event.left) {
        _left = u.event.left.map(u => {
          return Object.assign({}, u, { eventType, confirmText: '确认这个操作吗？' })
        })
      }
      if (u.event.right) {
        _right = u.event.right.map(u => {
          return Object.assign({}, u, { eventType, confirmText: '确认这个操作吗？' })
        })
      }
      return Object.assign({}, u, { event: Object.assign({}, u.event, { left: _left, right: _right }) });
    });
    this.setData({ baseList: _baseList });
  },
  // 回弹
  onChangeSwitch(val) {
    this.setData({ inertia: val });
  },
  handleAfterChange(val) {
    this.setData({ damping: val });
  },
  onRightItemEvent(type: string, key: string, callbackData: any) {
    console.log('type, key, callbackData', type, key, callbackData);
    my.showToast({ content: `right: ${key}-${type}` });
  },
  onLeftItemEvent(type: string, key: string, callbackData: any) {
    console.log('type, key, callbackData', type, key, callbackData);
    my.showToast({ content: `left: ${key}-${type}` });
  },
  onSwipeEnd(key: string) {
    this.setData({ swipeStr: key });
  },
  onSwipeStart() {
    this.setData({ swipeStr: ''});
  },
  onTouchEnd() {},
});

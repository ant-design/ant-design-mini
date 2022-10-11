const baseRightList = [
  {
    detail: '左滑-单按钮',
    event: {
      swiped: false,
      key: 'r-s1',
      itemWidth: 300,
      disable: false,
      right: [
        {
          type: 'delete',
          text: '删除',
          bgColor: '#FF2B00',
          color: '#fff',
          eventType: 'move',
          confirmText: '确认删除吗？',
        }
      ]
    }
  },
  {
    detail: '左滑-双按钮',
    event: {
      swiped: false,
      key: 'r-s2',
      itemWidth: 180,
      disable: false,
      right: [
        {
          type: 'set',
          text: '设为常用',
          bgColor: '#1677FF',
          color: '#fff',
          eventType: 'auto',
          confirmText: '确认设为常用吗？',
        },
        {
          type: 'delete',
          text: '删除',
          bgColor: '#FF2B00',
          color: '#fff',
          eventType: 'move',
          confirmText: '确认删除吗？',
        }
      ]
    }
  },
  {
    detail: '左滑-三按钮',
    event: {
      swiped: false,
      key: 'r-s3',
      itemWidth: 150,
      disable: false,
      right: [
        {
          type: 'set',
          text: '设为常用',
          bgColor: '#1677FF',
          color: '#fff',
          eventType: 'move',
          confirmText: '确认设为常用吗？',
        },
        {
          type: 'his',
          text: '往来记录',
          bgColor: '#FFA91B',
          color: '#fff',
          eventType: 'move',
          confirmText: '确认往来记录吗？',
        },
        {
          type: 'delete',
          text: '删除',
          bgColor: '#FF2B00',
          color: '#fff',
          eventType: 'move',
          confirmText: '确认删除吗？',
        }
      ]
    }
  },
  {
    detail: '右滑-单按钮',
    event: {
      swiped: false,
      key: 'l-s1',
      itemWidth: 300,
      disable: false,
      left: [
        {
          type: 'delete',
          text: '删除',
          bgColor: '#FF2B00',
          color: '#fff',
          eventType: 'move',
          confirmText: '确认删除吗？',
        }
      ]
    }
  },
  {
    detail: '右滑-双按钮',
    event: {
      swiped: false,
      key: 'l-s2',
      itemWidth: 180,
      disable: false,
      left: [
        {
          type: 'set',
          text: '设为常用',
          bgColor: '#1677FF',
          color: '#fff',
          eventType: 'move',
          confirmText: '确认设为常用吗？',
        },
        {
          type: 'delete',
          text: '删除',
          bgColor: '#FF2B00',
          color: '#fff',
          eventType: 'move',
          confirmText: '确认删除吗？',
        }
      ]
    }
  },
  {
    detail: '右滑-三按钮',
    event: {
      swiped: false,
      key: 'l-s3',
      itemWidth: 150,
      disable: false,
      left: [
        {
          type: 'set',
          text: '设为常用',
          bgColor: '#1677FF',
          color: '#fff',
          eventType: 'move',
          confirmText: '确认设为常用吗？',
        },
        {
          type: 'his',
          text: '往来记录',
          bgColor: '#FFA91B',
          color: '#fff',
          eventType: 'move',
          confirmText: '确认往来记录吗？',
        },
        {
          type: 'delete',
          text: '删除',
          bgColor: '#FF2B00',
          color: '#fff',
          eventType: 'move',
          confirmText: '确认删除吗？',
        }
      ]
    }
  },
  {
    detail: '左右滑-单按钮',
    event: {
      swiped: false,
      key: 'lr-s1',
      itemWidth: 300,
      disable: false,
      right: [
        {
          type: 'delete',
          text: '删除',
          bgColor: '#FF2B00',
          color: '#fff',
          eventType: 'move',
          confirmText: '确认删除吗？',
        }
      ],
      left: [
        {
          type: 'delete',
          text: '删除',
          bgColor: '#FF2B00',
          color: '#fff',
          eventType: 'move',
          confirmText: '确认删除吗？',
        }
      ]
    }
  },
  {
    detail: '左右滑-双按钮',
    event: {
      swiped: false,
      key: 'lr-s2',
      itemWidth: 150,
      disable: false,
      right: [
        {
          type: 'set',
          text: '设为常用',
          bgColor: '#1677FF',
          color: '#fff',
          eventType: 'move',
          confirmText: '确认设为常用吗？',
        },
        {
          type: 'his',
          text: '往来记录',
          bgColor: '#FFA91B',
          color: '#fff',
          eventType: 'move',
          confirmText: '确认往来记录吗？',
        },
      ],
      left: [
        {
          type: 'set',
          text: '设为常用',
          bgColor: '#1677FF',
          color: '#fff',
          eventType: 'move',
          confirmText: '确认设为常用吗？',
        },
        {
          type: 'his',
          text: '往来记录',
          bgColor: '#FFA91B',
          color: '#fff',
          eventType: 'move',
          confirmText: '确认往来记录吗？',
        },
      ]
    }
  },
  {
    detail: '左右滑-三按钮',
    event: {
      swiped: false,
      key: 'lr-s3',
      itemWidth: 150,
      disable: false,
      right: [
        {
          type: 'set',
          text: '设为常用',
          bgColor: '#1677FF',
          color: '#fff',
          eventType: 'move',
          confirmText: '确认设为常用吗？',
        },
        {
          type: 'his',
          text: '往来记录',
          bgColor: '#FFA91B',
          color: '#fff',
          eventType: 'move',
          confirmText: '确认往来记录吗？',
        },
        {
          type: 'delete',
          text: '删除',
          bgColor: '#FF2B00',
          color: '#fff',
          eventType: 'move',
          confirmText: '确认删除吗？',
        }
      ],
      left: [
        {
          type: 'set',
          text: '设为常用',
          bgColor: '#1677FF',
          color: '#fff',
          eventType: 'move',
          confirmText: '确认设为常用吗？',
        },
        {
          type: 'his',
          text: '往来记录',
          bgColor: '#FFA91B',
          color: '#fff',
          eventType: 'move',
          confirmText: '确认往来记录吗？',
        },
        {
          type: 'delete',
          text: '删除',
          bgColor: '#FF2B00',
          color: '#fff',
          eventType: 'move',
          confirmText: '确认删除吗？',
        }
      ]
    }
  },
]

Page({
  data: {
    baseRightList0: [],
    baseRightList1: [],
    baseRightList2: baseRightList,
    swipeStr: 's10',
  },
  onLoad() {
    const arr1 = [];
    const arr2 = [];
    const arr3 = [];
    const rObj = {
      type: 'delete',
      text: '删除',
      bgColor: '#FF2B00',
      color: '#fff',
    }
    baseRightList.forEach(u => {
      const r = u.event.right ? u.event.right.map(u => {
        return rObj;
      }) : [];
      const l = u.event.left ? u.event.left.map(u => {
        return rObj;
      }) : [];
      const a1 = { detail: u.detail, event: Object.assign({}, u.event, { right: r, left: l })  };
      arr1.push(a1);

      const r1 = u.event.right ? u.event.right.map(i => {
        return Object.assign({}, i, { eventType: 'auto' });
      }) : [];
      const l1 = u.event.left ? u.event.left.map(i => {
        return Object.assign({}, i, { eventType: 'auto' });
      }) : [];
      const a2 = { detail: u.detail, event: Object.assign({}, u.event, { right: r1, left: l1, key: `${u.event.key}-tap-check` })  };
      arr2.push(a2);

      const a3 = { detail: u.detail, event: Object.assign({}, u.event, { key: `${u.event.key}-move-check` })  };
      arr3.push(a3);
    });
    this.setData({ baseRightList0: arr1, baseRightList1: arr2, baseRightList2: arr3 });
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

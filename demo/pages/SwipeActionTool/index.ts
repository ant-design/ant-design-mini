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
      key: 'lr-s1',
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
      key: 'lr-s1',
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
    baseRightList,
    swipeStr: 's10',
  },
  onLoad() {},
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

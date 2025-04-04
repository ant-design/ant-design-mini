Page({
  data: {
    visible: false,
    items: [
      {
        key: '1',
        label: '给我推荐一首歌',
        description: '这是会话的部分富文本信息描述',
        icon: 'https://randomuser.me/api/portraits/thumb/women/4.jpg',
        timestamp: '10:23',
        disabled: false,
      },
      {
        key: '2',
        label: '请根据图片里的提示，写一篇小学二年级的数学题目',
        description:
          '这首歌来自英国歌手艾德·希兰旋律轻快，歌曲写自上个世纪落日',
        icon: '',
        timestamp: '10:22',
        disabled: false,
      },
      {
        key: '3',
        label: '禁用无法点击此条',
        description: '这是会话的部分富文本信息描述',
        icon: '',
        timestamp: '10:21',
        disabled: true,
      },
      {
        key: '4',
        label: '菜单禁用无法滑动',
        description: '这是会话的部分富文本信息描述',
        icon: '',
        timestamp: '10:18',
        disabled: false,
        disabledMenu: true,
      },
      {
        key: '5',
        label: '给我推荐一首歌',
        description: '这是会话的部分富文本信息描述',
        icon: '',
        timestamp: '09:11',
        disabled: false,
      },
    ],
    menus: [
      {
        text: '编辑',
        bgColor: '#FFA91B',
        color: '#fff',
        width: 160,
      },
      {
        text: '删除',
        bgColor: '#FF2B00',
        color: '#fff',
        width: 160,
      },
    ],
  },
  handleItemTap(i) {
    let item = i;
    /// #if ALIPAY || BUNDLE2H
    console.log(item);
    my.showToast({ content: item.key });
    /// #endif
    /// #if WECHAT
    item = i.detail[0];
    console.log(item);
    // @ts-ignore
    wx.showToast({ title: item.key });
    /// #endif
  },
  handleMenuItemTap(menuItem, item) {
    /// #if ALIPAY || BUNDLE2H
    console.log(menuItem, item);
    my.showToast({ content: `菜单${menuItem.index}_列表项${item.key}` });
    /// #endif
    /// #if WECHAT
    console.log(menuItem.detail[0], menuItem.detail[1]);
    // @ts-ignore
    wx.showToast({
      title: `菜单${menuItem.detail[0].index}_列表项${menuItem.detail[1].key}`,
    });
    /// #endif
  },

  handleOpenHistory() {
    this.setData({
      visible: true,
    });
  },
  handlePopupClose() {
    this.setData({
      visible: false,
    });
  },
});

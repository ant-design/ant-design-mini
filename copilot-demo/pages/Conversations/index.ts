Page({
  data: {
    items: [
      {
        key: '1',
        label: '给我推荐一首歌',
        description: '这是会话的部分富文本信息描述',
        icon: '',
        timestamp: '10:23',
        disabled: false,
      },
      {
        key: '2',
        label: '请根据图片里的提示，写一篇小学二年级的数学题目',
        description:
          '这首歌来自英国歌手艾德·希兰旋律轻快，歌曲写自上个世纪落日',
        icon: '',
        timestamp: '10:23',
        disabled: true,
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
  onItemTap(i) {
    let item = i;
    /// #if ALIPAY
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
});

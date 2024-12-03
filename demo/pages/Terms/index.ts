Page({
  data: {
    buttons1: [
      {
        text: '查看详情',
        type: 'primary',
      },
    ],
    buttons2: [
      {
        text: '查看详情',
        type: 'primary',
        icon: 'AppOutline',
      },
      {
        text: '次级按钮',
        type: 'secondary',
      },
      {
        text: '返回',
        type: 'default',
      },
      {
        text: '禁用',
        type: 'default',
        disabled: true,
      },
    ],
  },
  handleTap(item, index, event) {
    my.alert({ content: `点击了第 ${index} 个按钮` });
  },
  handleDisabledTap(item, index, event) {
    my.alert({ content: `点击了第 ${index} 个按钮` });
  },
});

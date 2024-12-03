Page({
  data: {
    buttons1: [
      {
        text: '同意协议 + 行动点描述',
        type: 'primary',
      },
      {
        text: '取消',
        aide: true,
        type: 'default',
      },
    ],
    buttons2: [
      {
        text: '行动点描述',
        type: 'primary',
      },
    ],
    terms: [
      {
        name: '《用户协议》',
        key: 'user',
      },
    ],
  },
  handleButtonTap(item, index, event) {
    console.log(item, index, event);
    my.showToast({ content: `点击了第 ${index + 1} 个按钮` });
  },
  handleTermTap(item, index, event) {
    console.log(item, index, event);
    my.showToast({ content: `点击了第 ${index + 1} 个协议` });
  },
  handleCheckChange(checked) {
    console.log('handleCheckChange', checked);
  },
  handleTermPrefixTap(checked) {
    console.log('handleTermPrefixTap', checked);
  },
});

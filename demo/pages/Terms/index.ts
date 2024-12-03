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
    buttons3: [
      {
        text: '请阅读全部协议',
        disabled: true,
        type: 'primary',
        countdownTime: 5,
      },
    ],
    terms: [
      {
        name: '《用户协议》',
        key: 'user',
      },
    ],
    checkboxTipsVisible: false,
  },
  handleButtonTap(item, index, checked, event) {
    console.log(item, index, checked, event);
    my.showToast({ content: `点击了第 ${index + 1} 个按钮` });
  },
  handleButton2Tap(item, index, checked) {
    this.setData({ checkboxTipsVisible: !checked });
  },
  handleTermTap(item, index, event) {
    console.log(item, index, event);
    my.showToast({ content: `点击了第 ${index + 1} 个协议` });
  },
  handleCheckChange(checked) {
    console.log('handleCheckChange', checked);
    if (checked) {
      this.setData({ checkboxTipsVisible: false });
    }
  },
  handleTermPrefixTap(checked) {
    console.log('handleTermPrefixTap', checked);
    if (checked) {
      this.setData({ checkboxTipsVisible: false });
    }
  },
  handleCountdownFinish(item, index) {
    console.log('handleCountdownFinish', item, index);
    this.setData({
      buttons3: this.data.buttons3.map((button, idx) =>
        idx === index
          ? { ...button, text: '同意协议 + 行动点描述', disabled: false }
          : button
      ),
    });
  },
});

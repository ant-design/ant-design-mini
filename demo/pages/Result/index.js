Page({
  data: {
    title: '操作成功',
    message: '内容详情可折行，建议不超过两内容。也可以通过插入更具有功能性的提示。',
    type: 'success',
    image: '',
    items: [
      { name: 'success', value: 'success', checked: true },
      { name: 'danger', value: 'danger' },
      { name: 'info', value: 'info' },
      { name: 'warn', value: 'warn' },
      { name: 'wait', value: 'wait' },
      { name: 'AlipayCircleFill', value: '使用 icon' },
      { name: 'https://gw.alipayobjects.com/mdn/miniProgram_mendian/afts/img/A*wiFYTo5I0m8AAAAAAAAAAABjAQAAAQ/original', value: '图片 URL' },
      { name: 'none', value: '使用 slot' },
    ],
  },
  radioChange(e) {
    const { value } = e.detail;
    if (['success', 'danger', 'info', 'warn', 'wait'].indexOf(value) !== -1) {
      this.setData({
        type: value,
        image: '',
      });
    } else if (value === 'none') {
      this.setData({
        type: '',
        image: '',
      });
    } else {
      this.setData({
        type: '',
        image: value,
      });
    }
  },
  titleChange(e) {
    this.setData({
      title: e.detail.value,
    });
  },
  subtitleChange(e) {
    this.setData({
      message: e.detail.value,
    });
  },
  onChange(e) {
    if (e.detail.value) {
      this.setData({
        buttons: [{
          text: '主要操作',
          type: 'primary',
        }, {
          text: '辅助操作',
          type: 'default',
        }],
      });
    } else {
      this.setData({
        buttons: [],
      });
    }
  },
  buttonTap(e) {
    my.showToast({
      content: `当前点击的是第 ${e + 1} 个按钮：${this.data.buttons[e].text}`,
    });
  },
});

Page({
  data: {
    value: false,
  },
  handleChange(checked, e) {
    console.log('change checked', checked, 'e', e)
    my.alert({
      title: `当前 switch 为 ${checked ? '打开' : '关闭'} 状态。`,
    });
  },
});

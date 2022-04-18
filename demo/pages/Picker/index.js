Page({
  data: {
    value: ['上海'],
    pickerList: [
      ['北京', '上海', '深圳', '广州', '南京', '武汉', '无锡', '苏州'],
    ],
    basicColumns: [
      [
        { label: '周一', value: 'Mon' },
        { label: '周二', value: 'Tues' },
        { label: '周三', value: 'Wed' },
        { label: '周四', value: 'Thur' },
        { label: '周五', value: 'Fri' },
      ],
      [
        { label: '上午', value: 'am' },
        { label: '下午', value: 'pm' },
      ],
    ],
  },
  handleCancelPicker() {
    my.showToast({
      content: '取消操作，关闭 picker',
    });
  },
  handleOk(value, column) {
    console.log('onOk', value, column);
    my.showToast({
      content: `点击确定，当前选择的值为：${value}`,
    });
  },
  formatTime(value, data) {
    return data
      .map((v, i) => v.find((v1) => v1.value === value[i]).label)
      .join('');
  },
});

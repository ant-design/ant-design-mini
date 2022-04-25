Page({
  data: {
    value: '上海',
    cityList: ['北京', '上海', '深圳', '广州', '南京', '武汉', '无锡', '苏州'],
    weekList: [
      { label: '周一', value: 'Mon' },
      { label: '周二', value: 'Tues' },
      { label: '周三', value: 'Wed' },
      { label: '周四', value: 'Thur' },
      { label: '周五', value: 'Fri' },
    ],
    columns: [
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
    console.log('onOk value', value, 'onOk  column', column);
  },

  handleChange(value, column) {
    console.log('onChange value', value, 'onChange  column', column);
  },

  formatTime(value, column) {
    return column.map(c => c.label).join('')
  },
});

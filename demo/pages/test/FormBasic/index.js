Page({
  data: {
    form: 'form',
    formV: 'formV',
    initialValues: {
      quantity: 1,
      needDelivery: false,
      time: ['Tues', 'am']
    },
    showTime: '请选择',
    times: [
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
  handleTimeSelect(time, timeColumn)  {
    console.log('time', time, 'timeColumn', timeColumn)
    this.setData({
      showTime: `${timeColumn[0].label}-${timeColumn[1].label} `
    })

  },
  handleValuesChange(value, values) {
    console.log(value, values);
  },
  handleSubmit(value) {
    my.alert({ title: '提交', content: JSON.stringify(value) });
  },
  handleFinishFailed(error) {
    console.log('error', error)
  }
});

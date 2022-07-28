import regionData from './city'
Page({
  data: {
    value: '上海',
    list: ['北京', '上海', '深圳', '广州', '南京', '武汉', '无锡', '苏州'],
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
    cityList: [regionData.province, regionData.city['11']],
    region: ['', '']
  },

  handleCancelPicker(e) {
    my.showToast({
      content: '取消操作，关闭 picker',
    });
    console.log(e);
  },

  handleOk(value, column, e) {
    console.log('onOk value', value, 'onOk  column', column, e);
  },

  handleChange(value, column, e) {
    console.log('onChange value', value, 'onChange  column', column, e);
  },

  formatTime(value, column) {
    return column.map(c => c && c.label).join('')
  },

  handlePickerChange(value, wholeValue ) {
    console.log('change', value, wholeValue )
    this.setData({
      cityList: [regionData.province, regionData.city[value[0]]],
    });
  },

  handleOnOk(value, column) {
    console.log('value', value, 'column', column)
  },

  handleCityPickerChange(value, wholeValue ) {
    this.setData({
      'cityList[1]': regionData.city[value[0]],
    })
  },

  handleCityOnOk(value, column) {
    this.setData({
      region: value
    })
    console.log('value', value, 'column', column)
  },

  handleDismiss() {
    if (this.data.region[0]) {
      this.setData({
        'cityList[1]': regionData.city[this.data.region[0]],
      });
    } else {
      this.setData({
        cityList: [regionData.province, regionData.city['11']]
      });
    }
 
  },



  handleCityFormat(value) {
    let provinceName = ''
    let cityName = ''
    if (value[0]) {
      provinceName = regionData.province.filter(p => p.value === value[0])[0].label
    }
    if (value[1]) {
      cityName = regionData.city[value[0]].filter(c => c.value === value[1])[0].label
    }
    if (provinceName && cityName) {
      return `${provinceName}-${cityName}`
    }
    return ''
  }

});

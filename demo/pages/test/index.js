import regionData from './city'
Page({
  data: {
    cityList: [ regionData.province, regionData.city['11']],
    value: ['', ''],
    visible: false
  },
  tempSelectedValue: [],
  handlePickerChange(value, wholeValue ) {
    this.setData({
      cityList: [regionData.province, regionData.city[value[0]]],
    });
  },

  handleBeforeOk(selectedValue) {
    const { value } = this.data
    if (value[0] && value[1]) {
      if (selectedValue[1] !== value[1] || selectedValue[0] !== value[0]) {
         this.tempSelectedValue = selectedValue
         this.setData({
           visible: true,
         })
         return false;
       } 
    }
    return true;
  },

  handleOnOk(value, column) {
    this.setData({
      value: value
    })
  },

  handleButtonTap(type) {
    if (type === 'main') {
      const { value } = this.data
      this.setData({
        visible: false,
        cityList: [regionData.province, regionData.city[value[0]]],
      })
    } else {
      this.setData({
        value: this.tempSelectedValue,
        visible: false
      })
    }
  },

  hanldecloseModal() {
    this.setData({
      visible: false
    })
  }
})
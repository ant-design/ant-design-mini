import cityList from './city';
Page({
  data: {
    cityList,
    value: ["34", "330"],
    orgList: [{
      label: '学生',
      value: 'stu',
      children: [{
        label: '一年级',
        value: 'grade1',
        children: [
          {
            label: '1班',
            value: 'class1-1'
          },
          {
            label: '2班',
            value: 'class1-2'
          },
        ]
      },{
        label: '二年级',
        value: 'grade2',
        children: [
          {
            label: '1班',
            value: 'class2-1'
          },
          {
            label: '2班',
            value: 'class2-2'
          },
          {
            label: '3班',
            value: 'class2-3'
          },
        ]
      },{
        label: '三年级',
        value: 'grade3',
        children: [
          {
            label: '1班',
            value: 'class3-1'
          },
          {
            label: '2班',
            value: 'class3-2'
          },
          {
            label: '3班',
            value: 'class3-3'
          },
        ]
      }]
    }, {
      label: '教职工',
      value: 'staff',
      children: [{
        label: '后勤部',
        value: 'grade1'
      },{
        label: '教学部',
        value: 'grade2'
      },{
        label: '保卫科',
        value: 'grade3'
      }]
      
    }]
  },

  handleCityPickerChange(value, selectedOption, e) {
    console.log('cityChange', value, selectedOption, e);
  },

  handleCityOnOk(value, selectedOption, e) {
    console.log('cityOk', value, selectedOption, e);
  },
  handleOk(value, selectedOption, e) {
    this.setData({ value: value });
    console.log("cityOk", value, selectedOption, e);
  },
  changeValue() {
    this.setData({ value: ["31", "310"] });
  },

  handleDismiss(e) {
    console.log('handleDismiss', e)
  },

  handleOrgPickerChange(value, selectedOption, e) {
    console.log('orgChange', value, selectedOption, e);
  },
  handleOrgPickerOk(value, selectedOption, e) {
    console.log("orgOk", value, selectedOption, e);
  }
});

import cityList from './city';
import orgList from './dynamic';
Page({
  data: {
    cityList,
    value: ["34", "330"],
    orgList,
    orgValue: []
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
  handleOrgListChange(value, selectedOption, e) {
    console.log('orgChange', value, selectedOption, e);
  },
  handleOrgOk(value, selectedOption, e) {
    this.setData({ orgValue: value });
    console.log('orgOk', value, selectedOption, e);
  },
  handleDismiss(e) {
    console.log('handleDismiss', e)
  }
});

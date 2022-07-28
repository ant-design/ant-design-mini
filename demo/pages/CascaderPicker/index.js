import cityList from './city';
Page({
  data: {
    cityList,
    controlledValue: ["34", "330"],
  },

  handleCityPickerChange(value, selectedOption, e) {
    console.log('cityChange', value, selectedOption, e);
  },

  handleCityOnOk(value, selectedOption, e) {
    console.log('cityOk', value, selectedOption, e);
  },
  handleControlledCityOnOk(value, selectedOption, e) {
    this.setData({ controlledValue: value });
    console.log("cityOk", value, selectedOption, e);
  },
  hanldeChangeControlledValue() {
    this.setData({ controlledValue: ["31", "310"] });
  },
});

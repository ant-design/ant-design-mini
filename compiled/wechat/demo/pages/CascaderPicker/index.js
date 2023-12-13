import cityList from './city';
Page({
    data: {
        cityList: cityList,
        value: ['34', '330'],
    },
    handleCityPickerChange: function (value, selectedOption, e) {
        console.log('cityChange', value, selectedOption, e);
    },
    handleCityOnOk: function (value, selectedOption, e) {
        console.log('cityOk', value, selectedOption, e);
    },
    handleOk: function (value, selectedOption, e) {
        this.setData({ value: value.detail[0] });
        console.log('cityOk', value, selectedOption, e);
    },
    handleChangeControlled: function () {
        this.setData({ value: ['31', '310'] });
    },
    handleClearControlled: function () {
        this.setData({ value: [] });
    },
    handleDismiss: function (e) {
        console.log('handleDismiss', e);
    },
});

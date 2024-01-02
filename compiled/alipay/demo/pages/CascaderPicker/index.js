import cityList from './city';
Page({
    data: {
        cityList,
        value: ['34', '330'],
    },
    handleCityPickerChange(value, selectedOption, e) {
        console.log('cityChange', value, selectedOption, e);
    },
    handleCityOnOk(value, selectedOption, e) {
        console.log('cityOk', value, selectedOption, e);
    },
    handleOk(value, selectedOption, e) {
        this.setData({ value: value });
        console.log('cityOk', value, selectedOption, e);
    },
    handleChangeControlled() {
        this.setData({ value: ['31', '310'] });
    },
    handleClearControlled() {
        this.setData({ value: [] });
    },
    handleDismiss(e) {
        console.log('handleDismiss', e);
    },
});

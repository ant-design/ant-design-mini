Page({
    data: {
        pickerVisible: false,
        min: new Date('2019/01/15').getTime(),
        max: new Date('2023/08/20').getTime(),
        defaultDate: new Date('2019/02/02').getTime(),
        defaultDateRange: [
            new Date('2022/03/21').getTime(),
            new Date('2022/05/20').getTime(),
        ],
        controlledDateRange: [
            new Date('2022/03/21').getTime(),
            new Date('2022/05/20').getTime(),
        ],
    },
    handleControlledRangeOk(value) {
        console.log('handleControlledRangeOk');
        console.log(value);
        this.setData({
            controlledDateRange: value,
        });
    },
    handlePickerChange(date, dateStr, e) {
        console.log('onPickerChange', date, dateStr, e);
    },
    handleOk(date, format, e) {
        console.log('onOk', date, format, e);
    },
    handlePickerRangeChange(type, date, dateStr, e) {
        console.log('onPickerRangeChange', type, date, dateStr, e);
    },
    handleRangeOk(date, format, e) {
        console.log('onRangeOk', date, format, e);
    },
    handleChangeDate() {
        this.setData({ defaultDate: new Date('2019/05/02').getTime() });
    },
    handleTriggerPicker(visible, e) {
        console.log('onVisibleChange', visible, e);
    },
    handleDismiss(e) {
        console.log('e', e);
    },
    handleFormatLabel(type, value) {
        return String(value);
    },
    handleTriggerControlledPicker(visible, e) {
        console.log('handleTriggerControlledPicker', visible, e);
        this.setData({
            pickerVisible: visible,
        });
    },
    handleOpenPicker() {
        this.setData({
            pickerVisible: true,
        });
    },
});

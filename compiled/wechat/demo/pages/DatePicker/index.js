Page({
    data: {
        min: new Date('2019/01/15').getTime(),
        max: new Date('2023/08/20').getTime(),
        defaultDate: new Date('2019/02/02').getTime(),
        defaultDateRange: [
            new Date('2022/03/21').getTime(),
            new Date('2022/05/20').getTime(),
        ],
        handleFormatLabel: function (type, value) {
            return String(value);
        },
    },
    handlePickerChange: function (date, dateStr, e) {
        console.log('onPickerChange', date, dateStr, e);
    },
    handleOk: function (date, format, e) {
        console.log('onOk', date, format, e);
    },
    handlePickerRangeChange: function (type, date, dateStr, e) {
        console.log('onPickerRangeChange', type, date, dateStr, e);
    },
    handleRangeOk: function (date, format, e) {
        console.log('onRangeOk', date, format, e);
    },
    handleChangeDate: function () {
        this.setData({ defaultDate: new Date('2019/05/02').getTime() });
    },
    handleTriggerPicker: function (visible, e) {
        console.log('onVisibleChange', visible, e);
    },
    handleDismiss: function (e) {
        console.log('e', e);
    },
    handleFormatLabel: function (type, value) {
        return String(value);
    },
});

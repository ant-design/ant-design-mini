Page({
  data: {
    pickerVisible: false,
    dateRangePickerVisible: false,
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
    /// #if WECHAT
    handleFormatLabel(type, value) {
      return String(value);
    },
    /// #endif
  },
  handleControlledRangeOk(value) {
    console.log('handleControlledRangeOk');
    console.log(value);
    /// #if WECHAT
    this.setData({
      // 微信只支持传递时间戳
      controlledDateRange: value.detail[0].map((o) => o.getTime()),
    });
    /// #endif

    /// #if ALIPAY
    this.setData({
      controlledDateRange: value,
    });
    /// #endif
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
    this.setData({ controlledDateRange: date });
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
    /// #if WECHAT
    console.log('handleTriggerControlledPicker', visible);
    this.setData({
      pickerVisible: visible.detail,
    });
    /// #endif

    /// #if ALIPAY
    console.log('handleTriggerControlledPicker', visible, e);
    this.setData({
      pickerVisible: visible,
    });
    /// #endif
  },

  changeDateRange() {
    this.setData({
      controlledDateRange: [
        new Date('2022/09/10').getTime(),
        new Date('2022/09/30').getTime(),
      ],
    });
  },

  handleOpenPicker() {
    this.setData({
      pickerVisible: true,
    });
  },
  handleTriggerControlledDateRangePicker(visible, e) {
    /// #if WECHAT
    console.log('handleTriggerControlledDateRangePicker', visible);
    this.setData({
      dateRangePickerVisible: visible.detail,
    });
    /// #endif

    /// #if ALIPAY
    console.log('handleTriggerControlledDateRangePicker', visible, e);
    this.setData({
      dateRangePickerVisible: visible,
    });
    /// #endif
  },

  handleOpenDateRangePicker() {
    this.setData({
      dateRangePickerVisible: true,
    });
  },
});

import enUS from './es-US';
// import arSA from './ar-SA';

Page({
  data: {
    locale: enUS,
    defaultValue: '',
    value: '',
    list: ['BeiJing', 'ShangHai', 'GuangZhou', 'ShenZhen', 'HangZhou', 'ChengDu', 'ChangSha'],
    themeVars: {
      'button-primary-color': 'yellow',
      'button-primary-background-color': 'green',
    },
    defaultDate: new Date('2019/02/02').getTime(),
    defaultDateRange: [
      new Date('2022/03/21').getTime(),
      new Date('2022/05/20').getTime(),
    ],
  },
  handleTap() {
    /// #if ALIPAY || BUNDLE2H
    my.alert({
      title: '点击按钮',
    });
    /// #endif

    /// #if WECHAT
    //@ts-ignore
    wx.showToast({
      title: '点击按钮',
    });
    /// #endif
  },

  handleOk(value, column, e) {
    console.log('onOk value', value, 'onOk  column', column, e);
  },

  handleChange(value, column, e) {
    console.log('onChange value', value, 'onChange  column', column, e);
  },
  handleTriggerPicker(visible, e) {
    console.log('onVisibleChange', visible, e);
  },
  handlePickerRangeChange(type, date, dateStr, e) {
    console.log('onPickerRangeChange', type, date, dateStr, e);
  },
});

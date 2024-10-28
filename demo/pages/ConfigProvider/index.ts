import esES from './es-ES';

Page({
  data: {
    locale: esES,
    theme: 'dark',
    defaultValue: '',
    value: '',
    list: ['北京', '上海', '深圳', '广州', '南京', '武汉', '无锡', '苏州'],
    themeVars: {
      'button-primary-color': 'yellow',
      'button-primary-background-color': 'green',
    },
  },
  handleTap() {
    /// #if ALIPAY
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
});

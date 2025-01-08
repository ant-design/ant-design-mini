const BUTTON_LISt = [
  {
    type: 'primary',
    text: '刷新重试',
  },
  {
    type: 'default',
    text: '网络诊断',
  },
];
Page({
  data: {
    imageUrl:
      'https://mdn.alipayobjects.com/huamei_mnxlps/afts/img/A*oV92T4FXR64AAAAAAAAAAAAADkqGAQ/original',
    mode: 'page',
    modeList: [
      {
        label: '全页空状态',
        value: 'page',
      },
      {
        label: '局部空状态',
        value: 'section',
      },
    ],
    horizontalButtonInfo: {
      layout: 'horizontal',
      list: BUTTON_LISt,
    },
    verticalButtonInfo: {
      layout: 'vertical',
      list: BUTTON_LISt,
    },
  },
  onClickButton(buttonInfo) {
    console.log('onClickButton buttonInfo: ', buttonInfo);
    /// #if ALIPAY
    my.showToast({ content: `点击了按钮「${buttonInfo.text}」` });
    /// #endif
    /// #if WECHAT
    // @ts-ignore
    wx.showToast({ title: `点击了按钮「${buttonInfo.detail.text}」` });
    /// #endif
  },
});

Page({
  data: {
    quickInputs: ['工资', '班费', '还款', '借款', '代购', '奖金', '生活费'],
    quickInputs2: [
      '❤️ 钱转你了',
      '🧽 注意身体',
      '🍰 生日快乐',
      '🎁 礼物',
      '💰 红包',
      '💐 鲜花',
      '🎉 恭喜',
    ],
  },

  handleChange(val) {
    let value = val;
    /// #if WECHAT
    value = val.detail;
    /// #endif
    console.log('handleChange', value);
  },
});

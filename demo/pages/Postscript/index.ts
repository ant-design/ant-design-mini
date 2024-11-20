Page({
  data: {
    content: '',
    content2: '',
    content3: '',
    content4: '',
    content5: '',
    quickInputs: [
      '工资', '班费', '还款', '借款', '代购', '奖金', '生活费'
    ],
    quickInputs2: [
      '❤️ 钱转你了', '🧽 注意身体', '🍰 生日快乐', '🎁 礼物', '💰 红包', '💐 鲜花', '🎉 恭喜'
    ]
  },

  handleChange(value) {
    this.setData({
      content: value
    });
    console.log('handleChange', value);
  },

  handleChange2(value) {
    this.setData({
      content2: value
    });
    console.log('handleChange2', value);
  },

  handleChange3(value) {
    this.setData({
      content3: value
    });
    console.log('handleChange3', value);
  },

  handleChange4(value) {
    this.setData({
      content4: value
    });
    console.log('handleChange4', value);
  },

  handleChange5(value) {
    this.setData({
      content5: value
    });
    console.log('handleChange5', value);
  }
});

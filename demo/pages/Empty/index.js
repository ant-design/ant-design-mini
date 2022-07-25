Page({
  data: {
    imageUrl: 'https://gw.alipayobjects.com/mdn/rms_7cc883/afts/img/A*PG7NQoXbN38AAAAAAAAAAAAAARQnAQ',
    mode: 'page',
    modeList: [{
      name: '全页空状态',
      value: 'page',
      checked: true
    }, {
      name: '局部空状态',
      value: 'section',
    }]
  },
  onSubBtnClick() {
    my.alert({
      title: '你点击了次按钮',
    });
  },
  onMainBtnClick() {
    my.alert({
      title: '你点击了主按钮',
    });
  },
  handleChangeMode(v) {
    this.setData({
      mode: v
    })
  }
});

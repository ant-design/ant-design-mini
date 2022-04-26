Page({
  data: {
    imageUrl: 'https://gw.alipayobjects.com/mdn/rms_7cc883/afts/img/A*PG7NQoXbN38AAAAAAAAAAAAAARQnAQ',
    mode: 'page',
    modeList: [{
      name: 'page',
      value: '全页空状态',
      checked: true
    }, {
      name: 'area',
      value: '局部空状态',
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
  handleChangeMode(e) {
    this.setData({
      mode: e.detail.value
    })
  }
});

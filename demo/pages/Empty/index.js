Page({
  data: {
    imageUrl: 'https://gw.alipayobjects.com/mdn/rms_7cc883/afts/img/A*PG7NQoXbN38AAAAAAAAAAAAAARQnAQ',
    mode: 'page',
    modeList: [{
      label: '全页空状态',
      value: 'page',
    }, {
      label: '局部空状态',
      value: 'section',
    }]
  },
  onSubBtnClick() {
    my.alert({
      title: '你点击了按钮1',
    });
  },
  onMainBtnClick() {
    my.alert({
      title: '你点击了按钮2',
    });
  },
  handleChangeMode(v) {
    this.setData({
      mode: v
    })
  }
});

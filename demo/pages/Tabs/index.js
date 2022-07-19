Page({
  data: {
    tab1Index: 0,
    tab2Index: 0,
    tab3Index: 0,
    tab4Index: 0,
    tab5Index: 0,
    tab6Index: 0,
    tab7Index: 0,
    tab8Index: 0,
    tab9Index: 0,
    tab10Index: 0,
    tab11Index: 0,
  },
  handleClickIcon() {
    my.alert({
      title: 'slot="plus"',
      content: '自定义 slot 的 icon 被点击',
    });
  },
  handleChangeTab1(index) {
    this.setData({ tab1Index: index });
  },
  handleChangeTab2(index) {
    this.setData({ tab2Index: index });
  },
  handleChangeTab3(index) {
    this.setData({ tab3Index: index });
  },
  handleChangeTab4(index) {
    this.setData({ tab4Index: index });
  },
  handleChangeTab5(index) {
    this.setData({ tab5Index: index });
  },
  handleChangeTab6(index) {
    this.setData({ tab6Index: index });
  },
  handleChangeTab7(index) {
    this.setData({ tab7Index: index });
  },
  handleChangeTab8(index) {
    this.setData({ tab8Index: index });
  },
  handleChangeTab9(index) {
    this.setData({ tab9Index: index });
  },
  handleChangeTab10(index) {
    this.setData({ tab10Index: index });
  },
  handleChangeTab11(index) {
    this.setData({ tab11Index: index });
  },
});

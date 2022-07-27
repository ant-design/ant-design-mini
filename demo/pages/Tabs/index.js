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

    tabTypes: [
      {
        title:"基础",
        type:"basis",
      },{
        title:"胶囊",
        type:"capsule",
      },{
        title:"复杂",
        type:"mixin",
      },
    ],
    tabList: [
      {
        title:"水果",
        subTitle:"描述文案",
        content:"西瓜",
      },{
        title:"蔬菜",
        subTitle:"描述文案",
        content:"西红柿",
      },{
        title:"动物",
        subTitle:"描述文案",
        content:"蚂蚁",
      },
    ],
    multiTabList: [
      {
        title:"选项卡",
        subTitle:"描述文案",
        content:"选项卡",
      },{
        title:"选项卡",
        subTitle:"描述文案",
        content:"选项卡",
      },{
        title:"选项卡",
        subTitle:"描述文案",
        content:"选项卡",
      },{
        title:"选项卡",
        subTitle:"描述文案",
        content:"选项卡",
      },{
        title:"选项卡",
        subTitle:"描述文案",
        content:"选项卡",
      },{
        title:"选项卡",
        subTitle:"描述文案",
        content:"选项卡",
      },{
        title:"选项卡",
        subTitle:"描述文案",
        content:"选项卡",
      }
    ]
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
});

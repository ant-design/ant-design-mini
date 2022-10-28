Page({
  data: {
    currentIndex: 0,
    items: [
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
    ]
  },
  handleChangeTab(currentIndex) {
    this.setData({
      currentIndex,
    });
  },
});
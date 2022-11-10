Page({
  data: {
    current: 0,
    items: [
      {
        id: 0,
        title:"水果",
        subTitle:"描述文案",
        content:"西瓜",
      },{
        id: 1,
        title:"蔬菜",
        subTitle:"描述文案",
        content:"西红柿",
      },{
        id: 2,
        title:"动物",
        subTitle:"描述文案",
        content:"蚂蚁",
      },
    ],
    items2: [
      {
        title:"水果",
        subTitle:"描述文案",
        content:"西瓜",
      },{
        title:"蔬菜",
        subTitle:"描述文案",
        content:"西红柿",
        disabled: true,
      },{
        title:"动物",
        subTitle:"描述文案",
        content:"蚂蚁",
      },
    ],
  },
  onChange(current) {
    this.setData({
      current,
    });
  },
});
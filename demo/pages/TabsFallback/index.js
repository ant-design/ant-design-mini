const component2 = my.canIUse('component2');

Page({
  data: {
    curIdx: 2,
    height: 30,
    type: 'basis',
    animation: false,
    swipeable: false,
    titleSlot: false,
    plusSlot: true,
    sticky: false,
    tabs: [
      {
        title: '选项一',
        subTitle: '描述文案',
        corner: true,
      },
      {
        title: '选项二',
        subTitle: '描述文案描述',
      },
      {
        title: '选项三',
        subTitle: '描述',
      },
    ],
    tabsType: [
      { name: 'basis', value: '普通', checked: true },
      { name: 'capsule', value: '胶囊' },
      { name: 'mixin', value: '带描述' },
    ],
    tabsNumber: [
      { name: '1', value: '一条' },
      { name: '2', value: '两条' },
      { name: '3', value: '三条' },
      { name: '-1', value: '很多', checked: true },
    ],
    tabsAnimation: [
      { name: true, value: 'true' },
      { name: false, value: 'false', checked: true },
    ],
    tabsSwipeable: [
      { name: true, value: 'true' },
      { name: false, value: 'false', checked: true },
    ],
    tabsTitleSlotScope: [
      { name: true, value: 'true' },
      { name: false, value: 'false', checked: true },
    ],
    tabsSticky: [
      { name: true, value: 'true' },
      { name: false, value: 'false', checked: true },
    ],
    tabsPlusSlotScope: [
      { name: true, value: 'true', checked: true },
      { name: false, value: 'false' },
    ],
    canSwipe: true,
  },
  onLoad() {
    if (!component2) {
      this.setData({
        canSwipe: component2,
      });
    }
  },
  // tabs 的点击回调
  changeTab(e) {
    this.setData({
      curIdx: e,
    });
  },
  // 右上角的 plus 区域点击事件
  iconClick() {
    my.alert({
      title: 'slot="plus"',
      content: '自定义 slot 的 icon 被点击',
    });
  },
});

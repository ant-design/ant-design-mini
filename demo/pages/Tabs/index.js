const component2 = my.canIUse('component2');

Page({
  data: {
    index: 2,
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
        disabled: true,
      },
      {
        title: 'Tab 4',
        subTitle: '描述',
      },
      {
        title: 'Tab 5',
        subTitle: '描述描述',
      },
      {
        title: 'Tab 6',
        subTitle: '描述',
      },
      {
        title: 'Tab 7',
        subTitle: '描述',
      },
      {
        title: 'Tab 8',
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
  // 【配置】tabs 选项卡条数修改
  tabsNumberChange(e) {
    if (e.detail.value === '1') {
      this.setData({
        tabs: [
          {
            title: '选项',
            subTitle: '描述文案',
            badge: 6,
          },
        ],
      });
    } else if (e.detail.value === '2') {
      this.setData({
        tabs: [
          {
            title: '选项',
            subTitle: '描述文案',
          },
          {
            title: '选项二',
            subTitle: '描述文案描述',
          },
        ],
      });
    } else if (e.detail.value === '3') {
      this.setData({
        tabs: [
          {
            title: '选项一',
            subTitle: '描述文案',
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
      });
    } else {
      this.setData({
        tabs: [
          {
            title: '选项一',
            subTitle: '描述文案',
          },
          {
            title: '选项二',
            subTitle: '描述文案描述',
          },
          {
            title: '选项三',
            subTitle: '描述',
          },
          {
            title: '4 Tab',
            subTitle: '描述',
            showBadge: true,
            badge: 0,
          },
          {
            title: '5 Tab',
            subTitle: '描述描述',
            badge: 999,
          },
          {
            title: '3 Tab',
            subTitle: '描述',
          },
          {
            title: '4 Tab',
            subTitle: '描述',
          },
          {
            title: '151111 Tab',
            subTitle: '描述',
          },
          {
            title: '42345 Tab',
            subTitle: '描述',
          },
          {
            title: '1511116787 Tab',
            subTitle: '描述',
          },
          {
            title: '42452 Tab',
            subTitle: '描述',
          },
          {
            title: '15451111 Tab',
          },
          {
            title: '4234 Tab',
            subTitle: '描述',
          },
          {
            title: '11251111 Tab',
            subTitle: '描述',
          },
          {
            title: '44123 Tab',
          },
          {
            title: '1531111 Tab',
            subTitle: '描述',
          },
          {
            title: '41 Tab',
          },
          {
            title: '15111111 Tab',
          },
        ],
      });
    }
  },
  // 【配置】type 类型选择
  tabsTypeChange(e) {
    this.setData({
      type: e.detail.value,
    });
  },
  // 【配置】animation 类型的选择
  tabsAnimationChange(e) {
    this.setData({
      animation: e.detail.value,
    });
  },
  // 【配置】swipeable 类型的选择
  tabsSwipeableChange(e) {
    this.setData({
      swipeable: e.detail.value,
    });
  },
  // 【配置】titleSlot 类型的选择
  tabsTitleSlotScopeChange(e) {
    this.setData({
      titleSlot: e.detail.value,
    });
  },
  // 【配置】plusSlot 类型的选择
  tabsPlusSlotScopeChange(e) {
    this.setData({
      plusSlot: e.detail.value,
    });
  },
  // 【配置】sticky 类型的选择
  tabsStickyChange(e) {
    this.setData({
      sticky: e.detail.value,
    });
  },
  // tabs 的点击回调
  changeTab(e) {
    this.setData({
      index: e,
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

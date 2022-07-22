Page({
  data: {
    index: 0,
    height: 30,
    type: 'basis',
    animation: false,
    swipeable: false,
    titleSlot: false,
    plusSlot: false,
    sticky: false,
    tabs: [
      {
        title: '选项卡',
        subTitle: '描述文案',
      },
      {
        title: '选项卡',
        subTitle: '描述文案',
      }
    ],
    tabsType: [
      { name: 'basis', value: '表单', checked: true },
      { name: 'capsule', value: '胶囊' },
      { name: 'mixin', value: '辅助文案' },
    ],
    tabsNumber: [
      { name: '2', value: '两项', checked: true },
      { name: '3', value: '三项' },
      { name: '-1', value: '多项' },
    ],
  },
  handleChangeAnimation(checked) {
    this.setData({ animation: checked });
  },
  handleChangeSwipeable(checked) {
    this.setData({ swipeable: checked });
  },
  handleChangeSticky(checked) {
    this.setData({ sticky: checked });
  },
  handleChangeTitleSlot(checked) {
    this.setData({ titleSlot: checked });
  },
  handleChangePlusSlot(checked) {
    this.setData({ plusSlot: checked });
  },
  handleChangeType(e) {
    this.setData({
      type: e.detail.value,
    });
  },
  // tabs 的点击回调
  handleChangeTab(e) {
    this.setData({
      index: e,
    });
  },
  // 右上角的 plus 区域点击事件
  handleClickIcon() {
    my.alert({
      title: 'slot="plus"',
      content: '自定义 slot 的 icon 被点击',
    });
  },
  handleChangeTabNum(e) {
    if (e.detail.value === '2') {
      this.setData({
        tabs: [
          {
            title: '选项卡',
            subTitle: '描述文案',
          },
          {
            title: '选项卡',
            subTitle: '描述文案',
          },
        ],
      });
    } else if (e.detail.value === '3') {
      this.setData({
        tabs: [
          {
            title: '选项卡',
            subTitle: '描述文案',
          },
          {
            title: '选项卡',
            subTitle: '描述文案',
          },
          {
            title: '选项卡',
            subTitle: '描述',
          },
        ],
      });
    } else {
      this.setData({
        tabs: [
          {
            title: '选项卡',
            subTitle: '描述文案',
          },
          {
            title: '选项卡',
            subTitle: '描述文案',
          },
          {
            title: '选项卡',
            subTitle: '描述',
          },
          {
            title: '选项卡',
            subTitle: '描述',
            showBadge: true,
            badge: 1,
          },
          {
            title: '选项卡',
            subTitle: '描述',
            badge: 999,
          },
          {
            title: '选项卡',
            subTitle: '描述',
          },
          {
            title: '选项卡',
            subTitle: '描述',
          },
          {
            title: '选项卡',
            subTitle: '描述',
          },
          {
            title: '选项卡',
            subTitle: '描述',
          },
          {
            title: '选项卡',
            subTitle: '描述',
          },
          {
            title: '选项卡',
            subTitle: '描述',
          },
          {
            title: '选项卡',
            subTitle: '描述',
          },
          {
            title: '选项卡',
            subTitle: '描述',
          },
          {
            title: '选项卡',
            subTitle: '描述',
          },
          {
            title: '选项卡',
            subTitle: '描述',
          },
          {
            title: '选项卡',
          },
          {
            title: '选项卡',
          },
        ],
      });
    }
  },
});

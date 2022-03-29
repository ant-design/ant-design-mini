Page({
  data: {
    index: 0,
    height: 30,
    type: 'basis',
    animation: true,
    swipeable: true,
    titleSlot: false,
    plusSlot: true,
    sticky: false,
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
    tabsType: [
      { name: 'basis', value: '普通', checked: true },
      { name: 'capsule', value: '胶囊' },
      { name: 'mixin', value: '带描述' },
    ],
    tabsNumber: [
      { name: '1', value: '一条' },
      { name: '2', value: '两条' },
      { name: '3', value: '三条', checked: true },
      { name: '-1', value: '很多' },
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
            badge: 1,
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
});

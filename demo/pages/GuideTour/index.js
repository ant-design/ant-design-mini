Page({
  data: {
    baseVisible: false,
    moreVisible: false,
    swiperVisible: false,
    slotVisible: false,
    index: 0,
    list: [
      {
        title: '引导描述文字标题',
        desc: '辅助描述文字辅助描述文字辅助描述文字辅助描述文字',
        left: 20,
        top: 80,
        imageUrl:
          'https://gw.alipayobjects.com/zos/antfincdn/IV3MGP1qL/bianzu%25252013.png',
      },
      {
        left: 20,
        top: 160,
        imageUrl:
          'https://gw.alipayobjects.com/zos/antfincdn/%26B6d3lBJn/bianzu%25252020.png',
      },
      {
        left: 20,
        top: 220,
        imageUrl:
          'https://gw.alipayobjects.com/zos/antfincdn/lwVOkCcwb/bianzu%25252021.png',
      },
    ],
  },
  onCancel() {
    this.setData({ visible: false });
  },
  onOpen() {
    this.setData({ visible: true });
  },
  onChange(index) {
    this.setData({
      index,
    });
  },

  openBaseTour() {
    this.commonShow('baseVisible');
  },
  closeBaseTour() {
    this.commonHide('baseVisible');
  },

  openMoreTour() {
    this.commonShow('moreVisible');
  },
  closeMoreTour() {
    this.commonHide('moreVisible');
  },

  openSwiperTour() {
    this.commonShow('swiperVisible');
  },
  closeSwiperTour() {
    this.commonHide('swiperVisible');
  },

  openSlotTour() {
    this.commonShow('slotVisible');
  },
  closeSlotTour() {
    this.commonHide('slotVisible');
  },

  commonShow(prop) {
    this.setData({
      [prop]: true,
      index: 0,
    });
  },
  commonHide(prop) {
    this.setData({
      [prop]: false,
    });
  },
});

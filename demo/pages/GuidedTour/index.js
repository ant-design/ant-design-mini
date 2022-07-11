Page({
  data: {
    baseVisible: false,
    moreVisible: false,
    scrollVisible: false,
    slotVisible: false,
    costomVisible: false,
    scrollTop: 100,
    list: [
      {
        index: 1,
        title: '引导描述文字标题',
        desc: '辅助描述文字辅助描述文字辅助描述文字辅助描述文字',
        left: 80,
        top: 70,
        image:
          'https://gw.alipayobjects.com/zos/antfincdn/1zFER29BC/bianzu%25252011.png',
      },
      {
        index: 2,
        title: '引导描述文字标题',
        desc: '辅助描述文字辅助描述文字辅助描述文字辅助描述文字',
        left: 60,
        top: 120,
        image:
          'https://gw.alipayobjects.com/zos/antfincdn/1zFER29BC/bianzu%25252011.png',
      },
      {
        index: 3,
        title: '引导描述文字标题',
        desc: '辅助描述文字辅助描述文字辅助描述文字辅助描述文字',
        left: 100,
        top: 40,
        image:
          'https://gw.alipayobjects.com/zos/antfincdn/1zFER29BC/bianzu%25252011.png',
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
    console.log('index', index);
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
  openScrollTour() {
    this.commonShow('scrollVisible');
  },
  closeScrollTour() {
    this.commonHide('scrollVisible');
  },
  openSlotTour() {
    this.commonShow('slotVisible');
  },
  closeSlotTour() {
    this.commonHide('slotVisible');
  },

  openCostomTour() {
    this.commonShow('costomVisible');
  },
  closeCostomTour() {
    this.commonHide('costomVisible');
  },

  onScorllChange(index) {
    if (index === 2) {
      my.pageScrollTo({
        scrollTop: this.data.scrollTop,
        duration: 200,
      });
    }
  },

  commonShow(prop) {
    this.setData({
      [prop]: true,
    });
  },
  commonHide(prop) {
    this.setData({
      [prop]: false,
    });
  },
});

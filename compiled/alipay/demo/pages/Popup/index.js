Page({
  data: {
    position: '',
    basicVisible: false,
    animation: true,
    scrollVisible: false,
    closeVisile: false,
  },
  handlePopupClose() {
    this.setData({
      basicVisible: false,
      scrollVisible: false,
      closeVisile: false,
    });
  },
  handleShowBasic(e) {
    const { position } = e.target.dataset;
    this.setData({
      position,
      basicVisible: true,
    });
  },
  handleShowScroll() {
    this.setData({ scrollVisible: true });
  },
  handleChangeAnimation(checked) {
    this.setData({ animation: checked });
  },
  handleShowClose() {
    this.setData({ closeVisile: true });
  },
});

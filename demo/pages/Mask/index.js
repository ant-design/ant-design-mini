Page({
  data: {
    type: 'market',
    maskZindex: 10,
    show: false,
  },
  handleClickMask() {
    this.setData({ show: false });
  },
  handleClickBtn(e) {
    const { type } = e.target.dataset;
    this.setData({ type, show: true });
  },
});

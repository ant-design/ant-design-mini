Page({
  getRef(ins) {
    this.reset = ins.setItemPosition;
  },
  resetPosition() {
    this.reset(0);
  },
});

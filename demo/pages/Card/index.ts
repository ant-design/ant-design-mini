Page({
  data: {
    foldStatus: false,
    titleSticky: false,
  },
  handleLinkClick() {
    my.alert({ content: '被点击了' });
  },
  handleTapFoldBtn() {
    console.log('收起展开态发生变化');
    this.setData({ foldStatus: !this.data.foldStatus });
  },
  handleTitleSticky(status) {
    this.setData({ titleSticky: status });
  },
});

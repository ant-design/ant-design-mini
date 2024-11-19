Page({
  data: {},
  gotoPage(event) {
    const src = event.target.dataset.src;
    if (typeof my === 'undefined') {
      //@ts-ignore
      wx.navigateTo({
        url: `./${src}/index`,
      });
      return;
    }
    my.navigateTo({
      url: `./${src}/index`,
    });
  },
});

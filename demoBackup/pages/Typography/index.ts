Page({
  data: {},
  handleTap(e) {
    const { type, text } = e.currentTarget.dataset;
    if (type === 'copy') {
      my.setClipboard({
        text,
        success() {
          my.showToast({ type: 'success', content: `复制成功` });
        },
      });
      return;
    }
    my.alert({ content: `点击${type}` });
  },
  handleDisabledTap(e) {
    const { type } = e.currentTarget.dataset;
    my.alert({ content: `禁用状态下点击${type}` });
  },
});

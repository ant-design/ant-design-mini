Page({
  data: {
    loading: true,
    showTyping: true,
  },
  onTypingComplete() {
    console.log('typing complete at', Date.now());
  },
  onTypingChange(e) {
    this.setData({
      showTyping: !this.data.showTyping,
    });
  },
  onSwitchChange() {
    this.setData({
      loading: !this.data.loading,
    });
  },
});

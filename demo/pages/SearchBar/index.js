Page({
  data: {
    value: '',
    showVoice: false,
    showBizIcon: false,
  },
  handleInput(value) {
    if (this.data.controlled) {
      this.setData({
        value,
      });
    }
  },
  handleClear() {
    if (this.data.controlled) {
      this.setData({
        value: '',
      });
    }
  },
  handleFocus(e) {
    // eslint-disable-next-line no-console
    console.log('focus', e);
  },
  handleBlur(e) {
    // eslint-disable-next-line no-console
    console.log('blur', e);
  },
  handleCancel() {
    if (this.data.controlled) {
      this.setData({
        value: '',
      });
    }
  },
  handleVoice() {
    // eslint-disable-next-line no-console
    console.log('press vocie icon');
  },
  handleSubmit(value) {
    my.alert({
      content: value,
    });
  },
  showVoiceChange(e) {
    this.setData({
      showVoice: e.detail.value,
      showBizIcon: e.detail.value,
    });
  },
});

Page({
  data: {
    value: '',
    showVoice: false,
    showBizIcon: false,
    basicValue: '',
    withCancelValue: '',
    voiceValue: '',
    numberValue: '',
    focusWithCancelValue: '',
    focusWithCancelFocus: false,
  },
  handleBasicInput(value, e) {
    this.setData({ basicValue: value });
    console.log(value, e);
  },
  handleBasicClear(value, e) {
    this.setData({ basicValue: '' });
    console.log(value, e);
  },
  handleWithCancelInput(value) {
    this.setData({ withCancelValue: value });
  },
  handleWithCancelClear() {
    this.setData({ withCancelValue: '' });
  },
  handleCancelWithCancel() {
    this.setData({ withCancelValue: '' });
    my.showToast({ content: 'click cancel', duration: 1000 });
  },
  handleVoiceInput(value) {
    this.setData({ voiceValue: value });
  },
  handleVoiceClear() {
    this.setData({ voiceValue: '' });
  },
  handleTapVoice() {
    my.showToast({ content: 'click voice', duration: 1000 });
  },
  handleFocusWithCancelInput(value) {
    this.setData({ focusWithCancelValue: value });
  },
  handleFocusWithCancelClear() {
    this.setData({ focusWithCancelValue: '' });
  },
  handleFocusCancelWithCancel() {
    this.setData({ focusWithCancelValue: '' });
    my.showToast({ content: 'click cancel', duration: 1000 });
  },
  handleFocusCancelWithFocus() {
    this.setData({ focusWithCancelFocus: true });
  },
  handleFocusCancelWithBlur() {
    this.setData({ focusWithCancelFocus: false });
  },
  handleNumberInput(value) {
    this.setData({ numberValue: value });
  },
  handleNumberClear() {
    this.setData({ numberValue: '' });
  },
});

Page({
  data: {
    name: '王五',
    cardNo: '1234****',
  },
  onSend(e) {
    my.alert({
      title: 'verify code sent',
      content: e,
    });
  },
  onExtraTap() {
    my.alert({
      content: 'extra tapped',
    });
  },
  onItemChange(e) {
    // eslint-disable-next-line no-console
    console.log('onItemChange:', e);
  },
  onItemFocus(v) {
    // eslint-disable-next-line no-console
    console.log('focus:', v);
  },
  onItemBlur(v) {
    // eslint-disable-next-line no-console
    console.log('blur:', v);
  },
  onItemConfirm(v) {
    // eslint-disable-next-line no-console
    console.log('confirm:', v);
  },
  onItemClear() {
    // eslint-disable-next-line no-console
    console.log('onItemClear');
  },
});

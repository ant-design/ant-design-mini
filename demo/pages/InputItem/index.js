Page({
  data: {
  },
  handleItemChange(e) {
    // eslint-disable-next-line no-console
    console.log('onItemChange:', e);
  },
  handleItemFocus(v) {
    // eslint-disable-next-line no-console
    console.log('focus:', v);
  },
  handleItemBlur(v) {
    // eslint-disable-next-line no-console
    console.log('blur:', v);
  },
  handleItemConfirm(v) {
    // eslint-disable-next-line no-console
    console.log('confirm:', v);
  },
  handleItemClear() {
    // eslint-disable-next-line no-console
    console.log('onItemClear');
  },
});

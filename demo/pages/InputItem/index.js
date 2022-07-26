Page({
  data: {
  },
  handleItemChange(value, e) {
    // eslint-disable-next-line no-console
    console.log('onItemChange:', value, e);
  },
  handleItemFocus(v, e) {
    // eslint-disable-next-line no-console
    console.log('focus:', v, e);
  },
  handleItemBlur(v, e) {
    // eslint-disable-next-line no-console
    console.log('blur:', v, e);
  },
  handleItemConfirm(v, e) {
    // eslint-disable-next-line no-console
    console.log('confirm:', v, e);
  },
  handleItemClear() {
    // eslint-disable-next-line no-console
    console.log('onItemClear');
  },
});

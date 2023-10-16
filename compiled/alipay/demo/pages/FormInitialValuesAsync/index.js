import { Form } from '../../../src/Form/form';


Page({
  form: new Form(),
  onLoad() {
    my.showLoading({
      content: '表单加载中...',
    });
    setTimeout(() => {
      this.form.setInitialValues({
        account: 'lily',
        address: 'alipay',
        needDelivery: true,
        quantity: 1,
      });
      this.form.reset();
      my.hideLoading();
    }, 1000);
  },
  handleRef(ref) {
    this.form.addItem(ref);
  },
  reset() {
    this.form.reset();
  },
  async submit() {
    const values = await this.form.submit();
    my.alert({
      title: '提交',
      content: JSON.stringify(values),
    });
  }
});

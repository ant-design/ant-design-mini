import { Form } from '../../../src/Form/form';


Page({
  form: new Form(),
  data: {
    needFruit: false,
  },
  onChange(value) {
    this.setData({
      needFruit: value,
    });
  },
  handleRef(ref) {
    this.form.addItem(ref);
  },
  reset() {
    this.setData({
      needFruit: false,
    });
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

import { Form } from '../../../src/Form/form';


Page({
  form: new Form(),
  handleRef(ref) {
    this.form.addItem(ref);
  },
  reset() {
    this.form.reset();
  },
  async submit() {
    const values = await this.form.submit();
    console.log(values);
  }
});

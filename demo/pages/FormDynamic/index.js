import { Form } from '../../../src/Form/form';


Page({
  data: {
    list: [{}],
  },
  form: new Form(),
  handleRef(ref) {
    this.form.addItem(ref);
  },
  reset() {
    this.form.reset();
  },
  add() {
    this.setData({
      list: [
        ... this.data.list,
        {},
      ],
    });
  },
  minus(e) {
    const { index } = e.currentTarget.dataset;
    const list = [...this.data.list];
    list.splice(index, 1);
    this.setData({
      list,
    });
  },
  async submit() {
    const values = await this.form.submit();
    console.log(values);
  }
});

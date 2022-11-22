import { Form } from '../../../src/Form/form';
import cityList from '../CascaderPicker/city';

Page({
  form: new Form(),
  data: {
    fruitList: ['苹果', '香蕉', '橘子', '西瓜'],
    cityList,
    checkboxOptions: [
      { value: 'apple', label: '苹果' },
      { value: 'orange', label: '橘子' },
    ],
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
  },
});

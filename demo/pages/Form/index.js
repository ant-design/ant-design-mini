import { Form } from '../../../src/Form/form';
import cityList from '../CascaderPicker/city';

Page({
  form: new Form(),
  data: {
    fruitList: ['苹果', '香蕉', '橘子', '西瓜'],
    cityList,
    radioGroupOptions: [
      { value: 'cat', label: '🐱' },
      { value: 'fox', label: '🦊' },
    ],
    checkboxGroupOptions: [
      { value: 'tomato', label: '🍅' },
      { value: 'potato', label: '🥔' },
      { value: 'eggplant', label: '🍆' },
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
      content: JSON.stringify(values, null, 2),
    });
    console.log(values);
  },
});

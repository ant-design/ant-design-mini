import { Form } from '../../../src/Form/form';
import cityList from './city';

const phoneLengthValidator = async (_, value) => {
  if (value.length !== 11) {
    throw new Error('请输入正确的账号');
  }
};
Page({
  form: new Form({
    rules: {
      account: [
        {
          required: true,
          message: '请输入账号',
        },
        () => ({
          // 一定需要时异步函数，返回Promise对象
          validator: phoneLengthValidator,
        }),
      ],
    }
  }),
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
    selectorOptions: [
      { value: 'basketball', text: '🏀' },
      { value: 'football', text: '⚽️' },
      { value: 'badminton', text: '🏸️' },
    ],
  },
  onLoad() {
    this.form.onValuesChange((value, allValues) => {
      const validates = this.form.getFieldsValidatorStatus();
      console.log('onValuesChange:', value, allValues, validates);
    });
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
  onUpload(localFile) {
    return new Promise((resolve) => {
      console.log('上传的图片为：', localFile);
      setTimeout(() => {
        resolve(
          'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*5m0ZQYhxhjEAAAAAAAAAAAAAARQnAQ'
        );
      }, 2000);
    });
  },
});

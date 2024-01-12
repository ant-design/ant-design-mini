import { Form } from '../../../src/Form/form';
import cityList from './city';

Page({
  data: {
    /// #if WECHAT
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
    /// #endif
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
    this.form = new Form();
    /// #if WECHAT
    if (this.formRefList) {
      this.formRefList.forEach((ref) => {
        this.form.addItem(ref);
      });
    }
    /// #endif
  },
  handleRef(ref) {
    /// #if ALIPAY
    this.form.addItem(ref);
    /// #endif

    /// #if WECHAT
    if (!this.formRefList) {
      this.formRefList = [];
    }
    this.formRefList.push(ref.detail);
    /// #endif
  },
  reset() {
    this.form.reset();
  },
  async submit() {
    const values = await this.form.submit();
    /// #if ALIPAY
    my.alert({
      title: '提交',
      content: JSON.stringify(values, null, 2),
    });
    /// #endif
    console.log(values);
  },
  /// #if ALIPAY
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
  /// #endif
});

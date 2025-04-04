import { Form } from '../../../../src/Form/form';
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
    toastShow: false,
  },
  onLoad() {
    this.form = new Form({
      initialValues: { user: { account: 'andy', phone: '10000' } },
      rules: {
        account: [
          {
            required: true,
            message: '请输入账号',
          },
          () => ({
            // 一定需要时异步函数，返回Promise对象
            validator: async (_, value) => {
              if (value.length < 6) {
                throw new Error('请输入至少6位');
              }
            },
          }),
        ],
      },
    });
    this.form.onValueChange('user.account', (value, allValues) => {
      const validates = this.form.getFieldsValidatorStatus();
      console.log('onValueChange:', value, allValues, validates);
    });
    this.form.onValuesChange((value, allValues) => {
      const validates = this.form.getFieldsValidatorStatus();
      console.log('onValuesChange:', value, allValues, validates);
    });
    /// #if WECHAT
    if (this.formRefList) {
      this.formRefList.forEach((ref) => {
        this.form.addItem(ref);
      });
    }
    /// #endif
  },
  handleRef(ref) {
    /// #if ALIPAY || BUNDLE2H
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
    this.form.reset({ user: { phone: '10000' } });
  },
  update() {
    this.form.setFieldsValue({
      user: { account: 'pony', phone: '10086', password: '123456' },
      address: '312312',
      needDelivery: true,
      quantity: 20,
      fruit: '西瓜',
      birthday: Date.now(),
      range: [Date.now(), Date.now() + 86400000],
      city: ['36', '360'],
      animalChoose: 'fox',
      fruitChoose: ['potato', 'eggplant'],
      likeChoose: 'badminton',
      slider: 44,
      image: [
        {
          path: 'https://resource/apml3bc4f816b58586ab65e1b54980a10c87.jpg',
          size: 2352941,
          status: 'done',
          uid: '201-1720155950249-1',
          url: 'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*5m0ZQYhxhjEAAAAAAAAAAAAAARQnAQ',
        },
      ],
      description: '说明一下情况',
      rate: 4,
    });
  },
  async submit() {
    const values = await this.form.submit();
    /// #if ALIPAY || BUNDLE2H
    my.alert({
      title: '提交',
      content: JSON.stringify(values, null, 2),
    });
    /// #endif
    console.log(values);
  },
  /// #if ALIPAY || BUNDLE2H
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
  showToast() {
    this.setData({
      toastShow: true,
    });
  },
  handleCloseToast() {
    this.setData({
      toastShow: false,
    });
  },
});

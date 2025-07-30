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
      initialValues: {
        'account': 'uaisduasd',
        'address': '北京北京市',
        'animalChoose': 'fox',
        'birthday': '2025-03-11T00:00:00.000Z',
        'city': ['11', '110'],
        'description': '这是一段很长的说明竞技即时阿斯达阿斯达',
        'fruit': '西瓜',
        'fruitChoose': ['potato', 'tomato'],
        'image': [
          {
            'path': 'https://resource/apml3e3908342944e384a1940a8605c9ad7c.png',
            'size': 38595,
            'status': 'done',
            'uid': '196-1739260033378-1',
            'url':
              'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*5m0ZQYhxhjEAAAAAAAAAAAAAARQnAQ',
          },
          {
            'path': 'https://resource/apml3e3908342944e384a1940a8605c9ad7c.png',
            'size': 38595,
            'status': 'done',
            'uid': '196-1739260033378-1',
            'url':
              'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*5m0ZQYhxhjEAAAAAAAAAAAAAARQnAQ',
          },
          {
            'path': 'https://resource/apml3e3908342944e384a1940a8605c9ad7c.png',
            'size': 38595,
            'status': 'done',
            'uid': '196-1739260033378-1',
            'url':
              'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*5m0ZQYhxhjEAAAAAAAAAAAAAARQnAQ',
          },
        ],
        'likeChoose': 'football',
        'needDelivery': true,
        'number': '22134',
        'password': '123455',
        'quantity': 2,
        'range': ['2025-04-11T00:00:00.000Z', '2025-12-11T00:00:00.000Z'],
        'rate': 4,
        'slider': 65,
      },
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

  update() {
    this.form.setFieldsValue({
      'account': 'maksusi',
      'address': 333,
      'animalChoose': 'fox',
      'birthday': Date.now(),
      city: ['36', '360'],
      'description': '说明一下情况',
      'fruit': '西瓜',
      'fruitChoose': ['potato', 'eggplant'],
      'image': [
        {
          path: 'https://resource/apml3bc4f816b58586ab65e1b54980a10c87.jpg',
          size: 2352941,
          status: 'done',
          uid: '201-1720155950249-1',
          url: 'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*5m0ZQYhxhjEAAAAAAAAAAAAAARQnAQ',
        },
      ],
      'likeChoose': 'badminton',
      'needDelivery': false,
      'number': 15937127381,
      password: '34124124123',
      'quantity': 20,
      'range': [Date.now(), Date.now() + 86400000],
      rate: 4,
      'slider': 44,
    });
  },
  clear() {
    this.form.setFieldsValue({
      'account': undefined,
      'address': undefined,
      'animalChoose': undefined,
      'birthday': undefined,
      city: [],
      'description': undefined,
      'fruit': undefined,
      'fruitChoose': [],
      'image': [],
      'likeChoose': undefined,
      'needDelivery': undefined,
      'number': undefined,
      password: undefined,
      'quantity': undefined,
      'range': [],
      rate: undefined,
      'slider': undefined,
    });
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

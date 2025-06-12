Page({
  data: {
    value: [1, 2],
    options_1: [
      {
        value: 1,
        title: '可勾选列表项1',
      },
      {
        value: 2,
        title: '可勾选列表项2',
      },
      {
        value: 3,
        title: '可勾选列表项3',
      },
    ],
    options_2: [
      {
        value: 1,
        image:
          'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*5m0ZQYhxhjEAAAAAAAAAAAAAARQnAQ',
        description: '这里是描述信息',
        title: '可勾选列表项1',
      },
      {
        value: 2,
        image:
          'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*5m0ZQYhxhjEAAAAAAAAAAAAAARQnAQ',
        description: '这里是描述信息',
        title: '可勾选列表项2',
      },
      {
        value: 3,
        image:
          'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*5m0ZQYhxhjEAAAAAAAAAAAAAARQnAQ',
        description: '这里是描述信息',
        title: '可勾选列表项3',
      },
    ],
    options_3: [
      {
        value: 1,
        title: '可勾选列表项1',
      },
      {
        value: 2,
        title: '禁用列表项2',
        disabled: true,
      },
      {
        value: 3,
        title: '可勾选列表项3',
      },
    ],
    options_4: [
      {
        value: 1,
        title: '可勾选列表项1',
      },
      {
        value: 2,
        title: '只读列表项2',
        readonly: true,
      },
      {
        value: 3,
        title: '可勾选列表项3',
      },
    ],
  },
  onChange(v, items, e) {
    console.log('当前选中的值为：', v, items, e);
  },
  onChangeControlled(value) {
    /// #if ALIPAY || ALIPAYNATIVE
    this.setData({ value });
    /// #endif

    /// #if WECHAT
    this.setData({ value: value.detail[0] });
    /// #endif
  },
});

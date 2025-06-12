import cityList from './city';

Page({
  data: {
    pickerVisible: false,
    defaultValue: '上海',
    value: '上海',
    list: ['北京', '上海', '深圳', '广州', '南京', '武汉', '无锡', '苏州'],
    /// #if WECHAT
    formatTime: (value, column) => {
      return column.map((c) => c && c.label).join('');
    },
    /// #endif
    weekList: [
      {
        label: '周一',
        value: 'Mon',
      },
      {
        label: '周二',
        value: 'Tues',
      },
      {
        label: '周三',
        value: 'Wed',
      },
      {
        label: '周四',
        value: 'Thur',
      },
      {
        label: '周五',
        value: 'Fri',
      },
    ],
    columns: [
      [
        {
          label: '周一',
          value: 'Mon',
        },
        {
          label: '周二',
          value: 'Tues',
        },
        {
          label: '周三',
          value: 'Wed',
        },
        {
          label: '周四',
          value: 'Thur',
        },
        {
          label: '周五',
          value: 'Fri',
        },
      ],
      [
        {
          label: '上午',
          value: 'am',
        },
        {
          label: '下午',
          value: 'pm',
        },
      ],
    ],
    cityList,
    cascaderValue: ['34', '330'],
    cascaderVisible: false,
  },
  handleDismiss(e) {
    /// #if ALIPAY || ALIPAYNATIVE
    my.showToast({
      content: '取消操作，关闭 picker',
    });
    console.log(e);
    /// #endif
  },
  handleClearControlled() {
    this.setData({
      value: '',
    });
  },
  handleChangeControlled() {
    this.setData({
      value: '深圳',
    });
  },
  handleControlledOk(value) {
    /// #if ALIPAY || ALIPAYNATIVE
    this.setData({
      value,
    });
    /// #endif
    /// #if WECHAT
    this.setData({
      value: value.detail[0],
    });
    /// #endif
  },
  handleOk(value, column, e) {
    console.log('onOk value', value, 'onOk  column', column, e);
  },

  handleChange(value, column, e) {
    console.log('onChange value', value, 'onChange  column', column, e);
  },
  /// #if ALIPAY || ALIPAYNATIVE
  formatTime(value, column) {
    return column.map((c) => c && c.label).join('');
  },
  /// #endif
  handleOnOk(value, column) {
    console.log('value', value, 'column', column);
  },
  handleTriggerPicker(visible, e) {
    console.log('onVisibleChange', visible, e);
  },
  handleTriggerControlledPicker(visible, e) {
    /// #if WECHAT
    console.log('handleTriggerControlledPicker', visible);
    this.setData({
      pickerVisible: visible.detail,
    });
    /// #endif

    /// #if ALIPAY || ALIPAYNATIVE
    console.log('handleTriggerControlledPicker', visible, e);
    this.setData({
      pickerVisible: visible,
    });
    /// #endif
  },

  handleOpenPicker() {
    this.setData({
      pickerVisible: true,
    });
  },

  // 以下是级联选择的方法

  handleCascaderPickerChange(cascaderValue, selectedOption, e) {
    console.log('cityChange', cascaderValue, selectedOption, e);
  },
  handleCascaderOnOk(cascaderValue, selectedOption, e) {
    console.log('cityOk', cascaderValue, selectedOption, e);
  },
  handleCascaderControlledOk(cascaderValue, selectedOption, e) {
    /// #if ALIPAY || ALIPAYNATIVE
    this.setData({ cascaderValue: cascaderValue });
    /// #endif

    /// #if WECHAT
    this.setData({ cascaderValue: cascaderValue.detail[0] });
    /// #endif
    console.log('cityOk', cascaderValue, selectedOption, e);
  },
  handleCascaderChangeControlled() {
    this.setData({ cascaderValue: ['31', '310'] });
  },
  handleCascaderClearControlled() {
    this.setData({ cascaderValue: [] });
  },
  handleCascaderTriggerControlledPicker(visible, e) {
    /// #if WECHAT
    console.log('handleTriggerControlledPicker', visible);
    this.setData({
      cascaderVisible: visible.detail,
    });
    /// #endif

    /// #if ALIPAY || ALIPAYNATIVE
    console.log('handleTriggerControlledPicker', visible, e);
    this.setData({
      cascaderVisible: visible,
    });
    /// #endif
  },
  handleCascaderOpenPicker() {
    this.setData({
      cascaderVisible: true,
    });
  },
});

const defOption = {
  point: true, // 展示小数点
  random: false, // 随机排列
  arrow: false, // 展示箭头
  confirmText: '', // 确认文案
  title: '', // 标题
  setTitle: false, // 示例使用：展示标题slot
  setBtn: false, // 示例使用：展示确认按钮slot
}
Page({
  data: {
    ...defOption,
    visible: false, // 展示键盘
    value1: '', // 特殊示例：数据输入框
    focus1: false,
    value2: '', // 特殊示例：金额输入框
    focus2: false,
    value3: '', // 特殊示例：验证码
    focus3: false,
    _type: '', // 特殊示例中使用判断类型
  },
  onLoad() {
    console.log('```123', this);
  },
  // 默认键盘
  onTap() {
    this.setData({ visible: !this.data.visible, ...defOption });
  },
  // 没有小数点
  onTap1() {
    this.onTap();
    this.setData({ ...defOption, point: false });
  },
  // 带确认按钮
  onTap2() {
    this.onTap();
    this.setData({ ...defOption, confirmText: '确认' });
  },
  // 带向下箭头
  onTap3() {
    this.onTap();
    this.setData({ ...defOption, arrow: true });
  },
  // 乱序键盘
  onTap4() {
    this.onTap();
    this.setData({ ...defOption, random: true });
  },
  // 带标题
  onTap5() {
    this.onTap();
    this.setData({ ...defOption, title: '安全键盘', arrow: true });
  },
  // 自定义标题
  onTap6() {
    this.onTap();
    this.setData({ ...defOption, arrow: true, setTitle: true, });
  },
  // 自定义确认按钮
  onTap7() {
    this.onTap();
    this.setData({ ...defOption, confirmText: '-', setBtn: true });
  },
  // 隐藏键盘
  onClose() {
    this.setData({ visible: false, focus1: false, focus2: false, focus3: false });
  },
  // 特殊示例： 数据输入框
  onNumberFocus() {
    this.onTap();
    this.setData({ focus1: true, ...defOption, point: false, _type: 'number'  });
  },
  // 特殊示例： 数金额输入框
  onAmountFocus() {
    this.onTap();
    this.setData({ focus2: true, ...defOption, confirmText: '确认', _type: 'amount' });
  },
  // 特殊示例： 验证码
  onCodeFocus() {
    this.onTap();
    this.setData({ focus3: true, ...defOption, point: false, _type: 'code' });
  },
  // 输入值受控
  onChange(e) {
    const { _type } = this.data;
    // 验证码
    if (_type === 'code') {
      this.setData({ value3: e });
      e.length === 4 && this.onTap();
    }
    // 数字
    if (_type === 'number') {
      this.setData({ value1: e ? parseFloat(e) : '' });
    }
    // 金额
    if (_type === 'amount') {
      // 第一位输入0，第二位输入1，直接展示1
       if (e[0] === '0' && e[1] && e[1] !== '.') {
        this.setData({ value2: e.slice(1, e.length) });
        return;
      }
      // 小数点补齐0.
      if (e === '.') {
        this.setData({ value2: '0.' });
        return;
      }
      // 不允许多个小数点
      const onePoint = e && e[e.length - 1] === '.' && e.length - 1 !== e.indexOf('.');
      // 限制小数点后2位
      const precision2 = e && e.split('.').length > 1 && e.split('.')[1].length === 3;
      if (onePoint || precision2) {
        this.setData({ value2: e.slice(0, e.length - 1) });
        return;
      }
      this.setData({ value2: e });
    }
  }
});

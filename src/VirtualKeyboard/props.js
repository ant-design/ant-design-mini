export const VirtualKeyboardDefaultProps = {
  codeLength: 4, // 验证码长度
  hideArrow: false, // 隐藏箭头
  point: true, // 展示小数点
  disableSureBtn: false, // 禁用确认按钮，支持动态修改
  sureBtnText: '确定', // 确认按钮字
  isSureBtnSlot: false, // slot 确定按钮
  type: 'keyboard', // 是否只需要键盘 keyboard | amount | code
  vibrate: true,
  focus: false, // 是否获取焦点，支持动态修改
  placeholder: '0.00',
  placeholderClass: '', // placeholder样式
  lightColor: '#1677ff', // 光标颜色
  lightClass: '', // 光标样式
  className: '',
  value: '', // 支持动态修改
  valueClass: '', // 字class
  fontSize: 20, // 金额字体大小
  max: 0, // 数字输入框最大值,不传或者传0的情况就没有最大值
  min: 0, // 数字输入框最小值
  sureBtnBg: '#1677FF', // 确认按钮背景颜色
  sureColor: '#fff', // 确认按钮字体颜色
  disable: false, // 禁用数字输入框，支持动态修改
  showBtnText: true, // 是否展示确认字体还是icon
  onMax: ()=> {},
  onMin: ()=> {},
  onBlur: ()=> {},
  onFocus: ()=> {},
  onChange: ()=> {},
  onEnter: ()=> {},
  onDelete: ()=> {},
};

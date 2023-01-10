export const NumberKeyboardDefaultProps = {
  className: '',
  value: '', // 值
  visible: false, // 是否展示
  safeArea: true, // 安全区域
  closeable: false, // 关闭箭头
  random: false, // 乱序
  vibrate: false, // 震动反馈
  point: true, // 展示小数点
  confirmDisabled: false, // 禁用确认按钮
  confirmText: '', // 确认按钮文字
  onChange: (val) => {}, // 输入
  onConfirm: () => {}, // 确认
  onClose: () => {}, // 关闭
}
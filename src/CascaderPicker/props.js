export const CascaderDefaultProps = {
  placeholder: '请选择',
  okText: '确定',
  dismissText: '取消',
  disabled: false,
  onFormat(value, options) {
    if (options) {
      return options.map((v) => v.label).join('');
    }
    return '';
  },
};

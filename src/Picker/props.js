export const PickerDefaultProps = {
  controlled: false,
  okText: '确定',
  dismissText: '取消',
  disabled: false,
  maskClosable: false,
  value:  '',
  data: [],
  placeholder:'请选择',
  onFormat: function onFormat(value, column) {
    if (column instanceof Array) {
      return column.filter(c  => c !== undefined).map(function (c) {
        if (typeof  c === 'object') {
          return c.label
        }
        return c
      }).join('-');
    }
    return column && column.label || column;
  }
};

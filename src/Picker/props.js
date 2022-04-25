export const PickerDefaultProps = {
  controlled: false,
  okText: '确定',
  dismissText: '取消',
  disabled: false,
  value:  [],
  data: [[]],
  onFormat: (value, column) => { 
    if  (column instanceof Array) {
      return  column.map(c  => c  && c.label || value ).join('-')
    }
    return column && column.label || column
  }
};

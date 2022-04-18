export const PickerDefaultProps = {
  controlled: false,
  okText: '确定',
  dismissText: '取消',
  disabled: false,
  value:  [],
  data: [[]],
  onFormat: (value) => {return  value.join('-')}
};

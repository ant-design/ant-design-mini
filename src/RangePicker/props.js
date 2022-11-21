import { PickerDefaultProps } from '../Picker/props';

export const DateRangePickerDefaultProps = {
  ...PickerDefaultProps,
  format: 'YYYY/MM/DD',
  splitCharacter: '-',
  startPlaceholder: '未选择',
  endPlaceholder: '未选择',
  precision: 'day',
};

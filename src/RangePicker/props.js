import { PickerDefaultProps } from '../Picker/props';

export const DateRangePickerDefaultProps = {
  ...PickerDefaultProps,
  format: 'YYYY/MM/DD',
  splitCharacter: '-',
  startPlaceholder: '未选择',
  endPlaceholder: '未选择',
  maskClosable: false,
  onFormat(values, valueStrs) {
    const { format, splitCharacter } = this.props;
    if (format && valueStrs && valueStrs[0] && valueStrs[1]) {
      return valueStrs.join(`${splitCharacter}`);
    }
    return '';
  },
  precision: 'day',
};

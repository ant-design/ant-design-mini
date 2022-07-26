import { PickerDefaultProps } from '../Picker/props';

export const DatePickerDefaultProps = {
  ...PickerDefaultProps,
  format: 'YYYY/MM/DD',
  onFormat(value, valueStr) {
    if (this.props.format && valueStr) {
      return valueStr;
    }
    return '';
  },
  precision: 'day',
};

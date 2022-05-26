
import dayjs from 'dayjs';
import { PickerDefaultProps } from '../Picker/props';

export const DatePickerDefaultProps = {
  ...PickerDefaultProps,
  format: 'YYYY-MM-DD',
  onFormat(value) {
    if (this.props.format && value) {
      return dayjs(value).format(this.props.format);
    }
    return '';
  },
  precision: 'day',
};

import {
  DatePickerFunctionalProps,
  IDatePickerProps,
} from '../../DatePicker/props';
import { FormItemFunctionalProps, FormItemProps } from '../FormItem/props';

export interface FormDatePickerProps extends IDatePickerProps, FormItemProps {
  /**
   * @description 箭头方向，不传表示没有箭头
   */
  arrow: boolean | 'right' | 'up' | 'down';
}

export const FormDatePickerDefaultProps: Partial<FormDatePickerProps> = {
  ...FormItemFunctionalProps,
  ...DatePickerFunctionalProps,
  arrow: false,
};

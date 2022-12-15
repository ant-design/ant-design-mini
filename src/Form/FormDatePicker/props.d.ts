import { FormItemProps } from '../FormItem/props';
import { IDatePickerProps } from '../../DatePicker/props';

export interface FormDatePickerProps extends IDatePickerProps, FormItemProps {
  /**
   * @description 箭头方向，不传表示没有箭头
   */
  arrow: boolean | 'right' | 'up' | 'down';
}

export declare const FormDatePickerDefaultProps: Partial<FormDatePickerProps>;

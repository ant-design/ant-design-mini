import { FormItemProps } from '../FormItem/props';
import { IDateRangePickerProps } from '../../DatePicker/RangePicker/props';

export interface FormRangePickerProps
  extends IDateRangePickerProps,
    FormItemProps {
  /**
   * @description 箭头方向，不传表示没有箭头
   */
  arrow: boolean | 'right' | 'up' | 'down';
}

export declare const FormRangePickerDefaultProps: Partial<FormRangePickerProps>;

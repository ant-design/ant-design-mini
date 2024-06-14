import { FormItemFunctionalProps, FormItemProps } from '../FormItem/props';
import { IDateRangePickerProps } from '../../DatePicker/RangePicker/props';
import { DateRangePickerFunctionalProps } from '../../DatePicker/RangePicker/props';

export interface FormRangePickerProps
  extends IDateRangePickerProps,
    FormItemProps {
  /**
   * @description 箭头方向，不传表示没有箭头
   */
  arrow: boolean | 'right' | 'up' | 'down';
}

export const FormRangePickerDefaultProps: Partial<FormRangePickerProps> = {
  ...FormItemFunctionalProps,
  ...DateRangePickerFunctionalProps,
  arrow: false,
};

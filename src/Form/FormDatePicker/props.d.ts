import { FormItemProps } from '../FormItem/props';
import { IDatePickerProps } from '../../DatePicker/props';

export interface FormDatePickerProps extends IDatePickerProps, FormItemProps {
  showArrow: boolean;
}

export declare const FormDatePickerDefaultProps: Partial<FormDatePickerProps>;

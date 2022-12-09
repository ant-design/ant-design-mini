import { FormItemProps } from '../FormItem/props';
import { IPickerProps } from '../../Picker/props';

export interface FormPickerProps extends IPickerProps, FormItemProps {
  showArrow: boolean;
}

export declare const FormPickerDefaultProps: Partial<FormPickerProps>;

import { FormItemProps } from '../FormItem/props';
import { ICascaderProps } from '../../Picker/CascaderPicker/props';

export interface FormCascaderPickerProps extends ICascaderProps, FormItemProps {
  showArrow: boolean;
}

export declare const FormCascaderPickerDefaultProps: Partial<FormCascaderPickerProps>;

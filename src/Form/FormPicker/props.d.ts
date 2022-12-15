import { FormItemProps } from '../FormItem/props';
import { IPickerProps } from '../../Picker/props';

export interface FormPickerProps extends IPickerProps, FormItemProps {
  /**
   * @description 箭头方向，不传表示没有箭头
   */
  arrow: boolean | 'right' | 'up' | 'down';
}

export declare const FormPickerDefaultProps: Partial<FormPickerProps>;

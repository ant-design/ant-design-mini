import { FormItemProps } from '../FormItem/props';
import { ICascaderProps } from '../../Picker/CascaderPicker/props';

export interface FormCascaderPickerProps extends ICascaderProps, FormItemProps {
  /**
   * @description 箭头方向，不传表示没有箭头
   */
  arrow: boolean | 'right' | 'up' | 'down';
}

export declare const FormCascaderPickerDefaultProps: Partial<FormCascaderPickerProps>;

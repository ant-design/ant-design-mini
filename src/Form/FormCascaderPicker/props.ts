import {
  CascaderDefaultProps,
  ICascaderProps,
} from '../../Picker/CascaderPicker/props';
import { FormItemDefaultProps, FormItemProps } from '../FormItem/props';

export interface FormCascaderPickerProps extends ICascaderProps, FormItemProps {
  /**
   * @description 箭头方向，不传表示没有箭头
   */
  arrow: boolean | 'right' | 'up' | 'down';
}

export const FormCascaderPickerDefaultProps: Partial<FormCascaderPickerProps> =
  {
    ...FormItemDefaultProps,
    ...CascaderDefaultProps,
    arrow: false,
  };

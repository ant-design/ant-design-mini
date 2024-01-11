import {
  CascaderFunctionalProps,
  ICascaderProps,
} from '../../Picker/CascaderPicker/props';
import { FormItemFunctionalProps, FormItemProps } from '../FormItem/props';

export interface FormCascaderPickerProps extends ICascaderProps, FormItemProps {
  /**
   * @description 箭头方向，不传表示没有箭头
   */
  arrow: boolean | 'right' | 'up' | 'down';
}

export const FormCascaderPickerDefaultProps: Partial<FormCascaderPickerProps> =
  {
    ...FormItemFunctionalProps,
    ...CascaderFunctionalProps,
    arrow: false,
  };

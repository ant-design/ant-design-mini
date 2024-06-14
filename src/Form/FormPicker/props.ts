import { IPickerProps, PickerFunctionalProps } from '../../Picker/props';
import { FormItemFunctionalProps, FormItemProps } from '../FormItem/props';

export interface FormPickerProps extends IPickerProps, FormItemProps {
  /**
   * @description 箭头方向，不传表示没有箭头
   */
  arrow: boolean | 'right' | 'up' | 'down';
}

export const FormPickerDefaultProps: Partial<FormPickerProps> = {
  ...FormItemFunctionalProps,
  ...PickerFunctionalProps,
  arrow: false,
};

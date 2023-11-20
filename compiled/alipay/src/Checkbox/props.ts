import { IBaseProps } from '../_util/base';
/**
 * @description 复选框，表单组件。
 */

export interface ICheckboxProps extends IBaseProps {
  value?: any;
  checked: boolean;
  defaultChecked?: boolean;
  disabled: boolean;
  color: string;
  onChange?: (checked: boolean, e: any) => void;
}

export const CheckboxDefaultProps: Partial<ICheckboxProps> = {};

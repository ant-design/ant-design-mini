import { IBaseProps } from '../../_base';

export interface ICheckboxGroupProps extends IBaseProps {
  value?: string[];
  defaultValue?: string[];
  disabled?: boolean;
  position?: 'horizontal' | 'vertical';
  onChange?: (value: string[], e: any) => void;
  color?: string;
  options?: {
    label?: string;
    value?: string;
    disabled?: boolean;
  }[];
}
export declare const CheckboxGroupDefaultProps: Partial<ICheckboxGroupProps>;

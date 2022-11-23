import { IBaseProps } from '../../_base';

export interface IRadioGroupProps extends IBaseProps {
  value?: string;
  defaultValue?: boolean;
  name?: string;
  disabled?: boolean;
  color?: string;
  position?: 'horizontal' | 'vertical';
  onChange?: (value: string, e: any) => void;
  options?: {
    label?: string;
    value?: string;
    disabled?: boolean;
  }[]
}
export declare const RadioGroupDefaultProps: Partial<IRadioGroupProps>;

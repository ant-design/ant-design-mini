import { IBaseProps } from '../../_base';

export interface IRadioGroupProps extends IBaseProps {
  value?: string;
  defaultValue?: boolean;
  name?: string;
  disabled?: boolean;
  onChange?: (value: string, e: any) => void;
  options?: {
    label?: string;
    value?: string;
  }[]
}
export declare const RadioGroupDefaultProps: Partial<IRadioGroupProps>;

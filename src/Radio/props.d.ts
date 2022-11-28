import { IBaseProps } from '../_base';

export interface IRadioProps extends IBaseProps {
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean, e: any) => void;
}
export declare const RadioDefaultProps: Partial<IRadioProps>;

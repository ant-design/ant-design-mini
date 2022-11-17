import { IBaseProps } from '../_base';

export interface IRadioItemProps extends IBaseProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean, e: any) => void;
}
export declare const RadioItemDefaultProps: Partial<IRadioItemProps>;

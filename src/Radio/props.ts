import { IBaseProps } from '../_util/base';

export interface IRadioProps extends IBaseProps {
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean, e: any) => void;
}

export const RadioDefaultProps: Partial<IRadioProps> = {
};

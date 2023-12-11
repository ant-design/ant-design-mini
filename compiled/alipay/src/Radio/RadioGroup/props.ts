import { IBaseProps } from '../../_util/base';

export interface IRadioGroupProps extends IBaseProps {
  value: string;
  defaultValue: string;
  name: string;
  disabled: boolean;
  color: string;
  position: 'horizontal' | 'vertical';
  onChange: (value: string, e: any) => void;
  options: {
    label?: string;
    value?: string;
    disabled?: boolean;
  }[];
}

export const RadioGroupDefaultProps: Partial<IRadioGroupProps> = {
  options: [],
  position: 'vertical',
};

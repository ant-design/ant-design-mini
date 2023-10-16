import { IBaseProps } from '../../_util/base';

export interface ICheckboxGroupProps extends IBaseProps {
  value: string[];
  defaultValue: string[];
  disabled: boolean;
  position: 'horizontal' | 'vertical';
  onChange: (value: string[], e: any) => void;
  color: string;
  options: {
    label?: string;
    value?: string;
    disabled?: boolean;
  }[];
}

export const CheckboxGroupDefaultProps: Partial<ICheckboxGroupProps> = {
  options: [],
  position: 'vertical',
  defaultValue: [],
};

import { IBaseProps } from '../../_util/base';

export interface ICheckboxGroupProps extends IBaseProps {
  value: string[];
  defaultValue: string[];
  disabled?: boolean;
  position: 'horizontal' | 'vertical';
  color: string;
  options: {
    label?: string;
    value?: string;
    disabled?: boolean;
  }[];
  onChange?: (value: string[], e: any) => void;
}

export const CheckboxGroupDefaultProps: Partial<ICheckboxGroupProps> = {
  options: [],
  position: 'vertical',
  defaultValue: [],
};

export const CheckboxGroupFunctionalProps: Partial<ICheckboxGroupProps> = {
  value: null,
  defaultValue: [],
  disabled: false,
  position: 'vertical',
  color: '',
  options: [],
};

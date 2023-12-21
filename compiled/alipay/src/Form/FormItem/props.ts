import { IBaseProps } from '../../_util/base';
import { ValidateStatus } from '../form';

export interface FormItemProps extends IBaseProps {
  name: string;
  label: string;
  labelWidth: number;
  position: 'horizontal' | 'vertical';
  validateStatus: ValidateStatus;
  help: string;
  requiredMark: 'asterisk' | 'text-required' | 'text-optional';
  status: 'default' | 'success' | 'error' | 'validating';
  errors: string[];
  tooltip?: string;
  required?: boolean;
  disabled?: boolean;
  extra?: string;
}

export const FormItemDefaultProps: Partial<FormItemProps> = {
  position: 'horizontal',
  requiredMark: 'asterisk',
};

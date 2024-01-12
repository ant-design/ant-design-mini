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
  message?: string;
  dependencies?: string[];
}

export const FormItemDefaultProps: Partial<FormItemProps> = {
  position: 'horizontal',
  requiredMark: 'asterisk',
};

export const FormItemFunctionalProps: FormItemProps = {
  name: null,
  label: null,
  labelWidth: null,
  position: 'horizontal',
  validateStatus: null,
  help: null,
  requiredMark: 'asterisk',
  status: null,
  errors: null,
  tooltip: '',
  required: false,
  disabled: false,
  extra: '',
  message: null,
  dependencies: null,
};

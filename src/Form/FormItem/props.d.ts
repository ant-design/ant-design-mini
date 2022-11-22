import { IBaseProps } from '../../_base';
import { ValidateStatus } from '../form';

export interface FormItemProps extends IBaseProps {
  name: string;
  label: string;
  position?: 'horizontal' | 'vertical';
  validateStatus?: ValidateStatus;
  help?: string;
  requiredMark?: 'asterisk' | 'text-required' | 'text-optional',
}

export declare const FormItemDefaultProps: Partial<FormItemProps>;

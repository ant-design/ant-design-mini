import { IBaseProps } from '../../_base';


export interface FormItemProps extends IBaseProps {
  name: string;
  label: string;
  position?: 'horizontal';
  requiredMark?: 'asterisk' | 'text-required' | 'text-optional',
}

export declare const FormItemDefaultProps: Partial<FormItemProps>;

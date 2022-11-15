import { IBaseProps } from '../../_base';


export interface FormSwitchProps extends IBaseProps {
  name: string;
  label: string;
  position?: 'horizontal';
  onChange?: (checked: boolean, e: any) => void;
}

export declare const FormSwitchDefaultProps: Partial<FormSwitchProps>;

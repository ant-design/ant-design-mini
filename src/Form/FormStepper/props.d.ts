import { IBaseProps } from '../../_base';
import { IStepperProps } from '../../Stepper/props';


export interface FormStepperProps extends Omit<IStepperProps, 'value'> {
  name: string;
  label: string;
  position?: 'horizontal';
  stepperClassName?: string;
  stepperStyle?: string;
}

export declare const FormStepperDefaultProps: Partial<FormStepperProps>;

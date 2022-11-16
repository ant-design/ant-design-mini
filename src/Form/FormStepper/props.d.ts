import { FormItemProps } from '../FormItem/props';
import { IStepperProps } from '../../Stepper/props';


export interface FormStepperProps extends Omit<IStepperProps, 'value' | 'defaultValue'>, FormItemProps {
  stepperClassName?: string;
  stepperStyle?: string;
}

export declare const FormStepperDefaultProps: Partial<FormStepperProps>;

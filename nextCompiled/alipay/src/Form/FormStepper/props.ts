import { FormItemDefaultProps, FormItemProps } from '../FormItem/props';
import { IStepperProps, StepperDefaultProps } from '../../Stepper/props';

export interface FormStepperProps
  extends Omit<IStepperProps, 'value' | 'defaultValue'>,
    FormItemProps {
  stepperClassName: string;
  stepperStyle: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { value, defaultValue, ...rest } = StepperDefaultProps;

export const FormStepperDefaultProps: Partial<FormStepperProps> = {
  ...FormItemDefaultProps,
  ...rest,
  stepperClassName: '',
  stepperStyle: '',
};

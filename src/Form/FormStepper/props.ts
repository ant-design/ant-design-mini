import { FormItemFunctionalProps, FormItemProps } from '../FormItem/props';
import { IStepperProps, StepperFunctionalProps } from '../../Stepper/props';

export interface FormStepperProps
  extends Omit<IStepperProps, 'value' | 'defaultValue'>,
    FormItemProps {
  stepperClassName: string;
  stepperStyle: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { value, defaultValue, ...rest } = StepperFunctionalProps;

export const FormStepperDefaultProps: Partial<FormStepperProps> = {
  ...FormItemFunctionalProps,
  ...rest,
  stepperClassName: '',
  stepperStyle: '',
};

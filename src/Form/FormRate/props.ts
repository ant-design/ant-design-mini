import { IRateProps, RateDefaultProps } from '../../Rate/props';
import { FormItemDefaultProps, FormItemProps } from '../FormItem/props';

export interface FormRateProps
  extends Omit<IRateProps, 'defaultValue'>,
    Omit<FormItemProps, 'readonly'> {
  rateClassName?: string;
  rateStyle?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { defaultValue, ...rest } = RateDefaultProps;

export const FormRateDefaultProps: Partial<FormRateProps> = {
  ...FormItemDefaultProps,
  ...rest,
  rateClassName: '',
  rateStyle: '',
};

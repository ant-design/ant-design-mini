import { FormItemFunctionalProps, FormItemProps } from '../FormItem/props';
import { IRateProps, RateFunctionalProps } from '../../Rate/props';

export interface FormRateProps
  extends Omit<IRateProps, 'defaultValue'>,
    FormItemProps {
  rateClassName?: string;
  rateStyle?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { defaultValue, ...rest } = RateFunctionalProps;

export const FormRateDefaultProps: Partial<FormRateProps> = {
  ...FormItemFunctionalProps,
  ...rest,
  rateClassName: '',
  rateStyle: '',
};

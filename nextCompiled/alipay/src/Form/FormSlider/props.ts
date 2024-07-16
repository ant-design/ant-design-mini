import { FormItemDefaultProps, FormItemProps } from '../FormItem/props';
import { ISliderProps, sliderDefaultProps } from '../../Slider/props';

export interface FormSliderProps
  extends Omit<ISliderProps, 'value' | 'defaultValue'>,
    FormItemProps {
  sliderClassName: string;
  sliderStyle: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { value, defaultValue, ...rest } = sliderDefaultProps;

export const FormSliderDefaultProps: Partial<FormSliderProps> = {
  ...FormItemDefaultProps,
  ...rest,
  sliderClassName: '',
  sliderStyle: '',
};

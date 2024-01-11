import { FormItemFunctionalProps, FormItemProps } from '../FormItem/props';
import { ISliderProps, SliderFunctionalProps } from '../../Slider/props';

export interface FormSliderProps
  extends Omit<ISliderProps, 'value' | 'defaultValue'>,
    FormItemProps {
  sliderClassName: string;
  sliderStyle: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { value, defaultValue, ...rest } = SliderFunctionalProps;

export const FormSliderDefaultProps: Partial<FormSliderProps> = {
  ...FormItemFunctionalProps,
  ...rest,
  sliderClassName: '',
  sliderStyle: '',
};

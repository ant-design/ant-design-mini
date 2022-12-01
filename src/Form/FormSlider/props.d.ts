import { FormItemProps } from '../FormItem/props';
import { ISliderProps } from '../../Slider/props';


export interface FormSliderProps extends Omit<ISliderProps, 'value' | 'defaultValue'>, FormItemProps {
  sliderClassName?: string;
  sliderStyle?: string;
}

export declare const FormSliderDefaultProps: Partial<FormSliderProps>;

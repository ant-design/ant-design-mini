import { IBaseProps } from '../_util/base';

export interface IDividerProps extends IBaseProps {
  lineColor: string;
  lineHeight: number;
  lineType: 'solid' | 'dashed' | 'dotted';
  lineWidth: number;
  text: string;
  textStyle: string;
  textClassName: string;
  textPosition: 'left' | 'center' | 'right';
  direction: 'horizontal' | 'vertical';
}

export const DividerDefaultProps: Partial<IDividerProps> = {
  textPosition: 'center',
  direction: 'horizontal',
  lineType: 'solid',
};

export const DividerFunctionalProps: Partial<IDividerProps> = {
  lineColor: '',
  lineHeight: 0,
  lineType: 'solid',
  lineWidth: 0,
  text: '',
  textStyle: '',
  textClassName: '',
  textPosition: 'center',
  direction: 'horizontal',
};

/* eslint-disable @typescript-eslint/no-explicit-any */
import { IBaseProps } from '../_util/base';

export interface ImageIconProps extends IBaseProps {
  image: string;
}

export const ImageIconDefaultProps: Partial<ImageIconProps> = {
  image: '',
};

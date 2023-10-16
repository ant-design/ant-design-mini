/* eslint-disable @typescript-eslint/no-explicit-any */
import { IBaseProps } from '../_util/base';
/**
 * @description 加载，用于提示局部或页面在加载中。
 */
export interface IMaskProps extends IBaseProps {
  maskZindex: string;
  type: 'product' | 'market';
  show: boolean;
  onMaskTap: (v: Record<string, any>) => void;
}

export const MaskDefaultProps: Partial<IMaskProps> = {
  type: 'product',
  show: true,
  style: ''
};

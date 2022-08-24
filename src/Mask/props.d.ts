/* eslint-disable @typescript-eslint/no-explicit-any */
import { IBaseProps } from '../_base';
/**
 * @description 加载，用于提示局部或页面在加载中。
 */
export interface IMaskProps extends IBaseProps {
  maskZindex: string;
  type: 'product' | 'market';
  show: boolean;
  fixMaskFull: boolean;
  disableScroll: boolean;
  onMaskTap: (v: Record<string, any>) => void;
}
export declare const MaskDefaultProps: Partial<IMaskProps>;

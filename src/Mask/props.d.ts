/* eslint-disable @typescript-eslint/no-explicit-any */
import { IBaseProps } from '../_base';
/**
 * @description 遮罩层
 */
export interface IMaskProps extends IBaseProps {
    maskZindex: string,
    type: 'product' | 'market',
    show: boolean,
    fixMaskFull: false,
    onMaskTap: (v: Record<string, any>) => void
}
export declare const MaskDefaultProps: Partial<IMaskProps>;

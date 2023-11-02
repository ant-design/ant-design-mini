import { IBaseProps } from '../_util/base';

/**
 * @description 加载，用于提示局部或页面在加载中。
 */
export interface IMaskProps extends IBaseProps {
  show: boolean;
  onMaskTap?: (v: Record<string, unknown>) => void;
}

export const MaskDefaultProps: Partial<IMaskProps> = {
  show: true,
};

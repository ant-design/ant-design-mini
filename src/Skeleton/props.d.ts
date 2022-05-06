import { IBaseProps, IconType } from '../_base';


/**
 * @description 评分
 */
export interface IRateProps extends IBaseProps {
  /**
  * @description 是否有动画
  * @default false
  */
  animated?: boolean;
  /**
     * @description 类名
     */
  className?: string;
}
export declare const SkeletonDefaultProps: Partial<IRateProps>;

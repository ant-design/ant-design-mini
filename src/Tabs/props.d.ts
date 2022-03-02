
import { IBaseProps } from '../_base';
/**
 * @description 标签栏，内部配合 TabItem 使用。
 */

export interface ITabsProps extends IBaseProps {
  /**
   * @description 类型，basis(基础)，capsule(胶囊)，mixin(混合)
   * @default "basis"
   */
  type?: 'basis' | 'capsule' | 'mixin';
  /**
   * @description 当前激活的索引
   * @default 0
   */
  index?: number;
  /**
   * @description tab 切换时的回调
   */
  onChange?: (index: number) => void;
  /**
   * @description 是否有过渡动画
   * @default false
   */
  animation?: boolean;
  /**
   * @description 是否支持手势切换
   * @default false
   */
  swipeable?: boolean;
  /**
   * @description 是否支持吸顶
   * @default false
   */
  sticky?: boolean;
}
export declare const TabsDefaultProps: Partial<ITabsProps>;

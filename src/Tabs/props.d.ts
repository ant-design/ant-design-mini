
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
  /**
   * @description 吸顶高度
   * @default 0
   */
  stickyTop?: boolean;
  /**
   * @description 内部 swiper 组件的 onTouchStart 事件（仅在基础库 2.x 版本生效）
   * @default 0
   */
  onTouchStart?: (e:any) => void;
  /**
   * @description 内部 swiper 组件的 onTouchStart 事件（仅在基础库 2.x 版本下生效）
   * @default 0
   */
  onTransition?: (e:any) => void;
  /**
   * @description 是否自定义实现"轮播"，详见 fallback demo
   * @default 0
   */
  fallback?: boolean;
}
export declare const TabsDefaultProps: Partial<ITabsProps>;

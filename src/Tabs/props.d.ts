
import { IBaseProps } from '../_base';

/**
 * @description 标签栏，内部配合 TabItem 使用。
 */
export interface ITabsProps extends IBaseProps {
  /**
   * @description 类型，basis(基础)，capsule(胶囊)，mixin(混合)
   * @default "basis"
   */
  uid: string;

  /**
   * @description 自动以指定滑块的高度为整个容器的高度
   * @default 'current'
   */
  adjustHeight: 'first' | 'current' | 'highest' | 'none';

  /**
   * @description swiper-item 可见时的 class
   * @default ''
   */
  activeClass: string;


  /**
   * @description 类型，basis(基础)，capsule(胶囊)，mixin(混合)
   * @default "basis"
   */
  type?: 'basis' | 'capsule' | 'mixin';

  /**
   * @description 当前激活的索引
   * @default 0
   */
  activekey?: number;

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
  stickyTop?: string | number;

  /**
   * @description 是否自定义实现"轮播"，详见 fallback demo
   * @default 0
   */
  fallback?: boolean;


  /**
   * @description tab 切换时的回调
   */
  onChange?: (index: number) => void;

  /**
   * @description 内部 swiper 组件的 onTouchStart 事件（仅在基础库 2.x 版本生效）
   * @default 0
   */
  onTouchStart?: (e: any) => void;

  /**
   * @description 内部 swiper 组件的 onTransition 事件（仅在基础库 2.x 版本下生效）
   * @default 0
   */
  onTransition?: (e: any) => void;

  /**
   * @description 内部 swiper 组件的 onAnimationEnd 事件（仅在基础库 1.50.0 以上版本生效）
   */
  onAnimationEnd?: (e: any) => void;
}
export declare const TabsDefaultProps: Partial<ITabsProps>;

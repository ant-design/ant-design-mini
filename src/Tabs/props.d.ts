
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
   * @description 前边距，单位 px，1.9.0 暂时只支持水平方向。
   * @default '0px'
   */
  previousMargin: string;

  /**
   * @description 后边距，单位 px，1.9.0 暂时只支持水平方向。
   * @default '0px'
   */
  nextMargin: string;

  /**
   * @description 切换缓动动画类型。
   * @default 'default'
   */
  easingFunction: string;

  /**
   * @description 当 swiper-item 个数大于等于 2，关闭 circular 并且开启 previous-margin 或 next-margin 时，可以指定这个边距是否应用到第一个、最后一个元素。
   * @default false
   */
  snapToEdge: boolean;

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
   * @description 用户左右滑动手势生效的滑动角度。角度根据 touchstart 事件和首次 touchmove 事件的坐标计算得出。数值越小越对用户的滑动方向准确度要求越高
   * @default 45
   */
  touchAngle?: number;

  /**
   * @description 用户左右滑动手势触发切换的阈值，当滑动距离超过阈值时进行 `swiper-item` 切换
   * @default 0.2
   */
  swipeRatio?: number;

  /**
   * @description 用户左右滑动手势对应的滑动距离，数值越小则需要用户手势相同位移下 `swiper-item` 位移越小
   * @default 0.05
   */
  swipeSpeed?: number;

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

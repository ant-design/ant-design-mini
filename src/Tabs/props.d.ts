
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
  /**
   * @description 内部 swiper 组件属性 touch-angle。计算用户手势时所依赖的滑动角度。角度根据 touchstart 事件和首次 touchmove 事件的坐标计算得出。数值越小越对用户的滑动方向准确度要求越高。
   * @default 45
   */
  touchAngle?: number;
  /**
   * @description 内部 swiper 组件属性 swipe-ratio。用户手势时触发切换的滑动距离阈值，当滑动距离超过阈值时进行 `swiper-item` 切换。数值越小则需要用户手势移动距离越大才能触发切换。
   * @default 0.2
   */
  swipeRatio?: number
  /**
   * @description 内部 swiper 组件属性 swipe-speed。计算用户手势时产生的滑动距离，数值越小则需要用户手势相同位移下 `swiper-item` 位移越小
   * @default 0.05
   */
  swipeSpeed?: number
}
export declare const TabsDefaultProps: Partial<ITabsProps>;

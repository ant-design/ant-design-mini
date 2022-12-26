import { IBaseProps } from '../_base';
interface SwipeButton {
  text: string,
  width?: number,
  bgColor?: string,
  color?: string,
  confirmType?: '' | 'move' | 'tap',
  confirmText?: string,
}
interface SwipeData {
  direction: 'right' | 'left' | '',
  btnIdx?: number,
  swiped?: boolean,
}

interface ISwipeActionProps extends IBaseProps  {
  /**
   * @description 左侧滑出事件
   * @default []
   */
  leftButtons?: SwipeButton[];
  /**
   * @description 右侧滑出事件
   * @default []
   */
  rightButtons?: SwipeButton[];
  /**
   * @description 滑动速度
   * @default 70
   */
  damping?: number;
  /**
   * @description 禁止滑动
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 禁止滑动
   * @default ''
   */
  swiped?: '' | 'left' | 'right';
  /**
   * @description 禁止滑动
   * @default ''
   */
  defaultSwiped?: '' | 'left' | 'right';
  /**
   * @description 弹性超出最大滑动距离自动弹回
   * @default true
   */
  elasticity?: boolean
  /**
   * @description 滑动结束
   */
  onSwipeEnd: (data: SwipeData, e: Record<string, any>) => void;
  /**
   * @description 滑动、触摸开始
   */
  onSwipeStart: (data: SwipeData, e: Record<string, any>) => void;
  /**
   * @description 右侧滑动按钮的点击事件回调
   */
  onButtonTap: (data: SwipeData, e: Record<string, any>) => void;
}
export declare const SwipeActionDefaultProps: Partial<ISwipeActionProps>;
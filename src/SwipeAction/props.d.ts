import { IBaseProps } from '../_base';

interface SwipeButton {
    type: string,
    text: string,
    bgColor?: string,
    color?: string,
    style?: object,
    eventType?: 'move' | 'auto',
    confirmText?: string,
}

interface SwipeEnd {
    direction: 'right' | 'left',
    left?: boolean,
    right?: boolean,
}

interface ISwipeActionProps extends IBaseProps  {
  /**
   * @description 左侧滑出事件
   * @default []
   */
   left?: SwipeButton[];
  /**
   * @description 右侧滑出事件
   * @default []
   */
   right?: SwipeButton[];
  /**
   * @description 滑动速度
   * @default 20
   */
   damping?: number;
  /**
   * @description 滑动弹性
   * @default true
   */
   inertia?: boolean;
  /**
   * @description 左侧按钮是否滑开
   * @default false
   */
   leftSwiped?: boolean;
  /**
   * @description 右侧按钮是否滑开
   * @default false
   */
   rightSwiped?: boolean;
  /**
   * @description 禁止滑动
   * @default false
   */
   disable?: boolean;
  /**
   * @description 滑动结束
   */
   onSwipeEnd: (swipeObj: SwipeEnd, callbackData: object) => void;
  /**
   * @description 滑动、触摸开始
   */
   onSwipeStart: (callbackData: object) => void;
  /**
   * @description 右侧滑动按钮的点击事件回调
   */
   onRightItemEvent: (type: string, callbackData: object) => void;
  /**
   * @description 左侧滑动按钮的点击事件回调
   */
   onLeftItemEvent: (type: string, callbackData: object) => void;
}
export declare const SwipeActionDefaultProps: Partial<ISwipeActionProps>;

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
   * @description 滑出按钮宽度
   * @default 150
   */
   itemWidth?: number;
  /**
   * @description 滑动速度
   * @default 20
   */
   damping?: number;
  /**
   * @description 唯一标识
   * @default ''
   */
   key: string;
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
   * @description 回调数据
   * @default {}
   */
   callbackData?: object;
  /**
   * @description 滑动结束
   */
   onSwipeEnd: (key: string, swipeObj: SwipeEnd, callbackData: object) => void;
  /**
   * @description 滑动、触摸开始
   */
   onSwipeStart: (key: string, callbackData: object) => void;
  /**
   * @description 触摸结束
   */
   onTouchEnd: (key: string, callbackData: object) => void;
  /**
   * @description 右侧滑动按钮的点击事件回调
   */
   onRightItemEvent: (type: string, key: string, callbackData: object) => void;
  /**
   * @description 左侧滑动按钮的点击事件回调
   */
   onLeftItemEvent: (type: string, key: string, callbackData: object) => void;
}
export declare const SwipeActionDefaultProps: Partial<ISwipeActionProps>;

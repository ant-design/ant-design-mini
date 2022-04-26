import { IBaseProps } from '../_base';

interface ISwipeActionRef {
  getCompInstance: () => any,
  setItemPosition: (idx: number) => void
}
export interface ISwipeButton extends IBaseProps {
  /**
   * @description 按钮文字
   */
  text?: string;
  /**
   * @description 按钮类型 default=普通 primary=品牌色 danger=红色/危险
   */

  type?: 'default' | 'primary' | 'danger';
}
/**
 * @description 可滑动列表，左右滑动显示操作按钮。
 */

export interface ISwipeActionProps extends IBaseProps {
  /**
   * @description 点击按钮是是否会自动收起
   * @default false
   */
  autoClose?: boolean;
  /**
   * @description 是否禁止操作
   * @default false
   */

  disabled?: boolean;
  /**
   * @description 点击箭头右滑按钮的速度，单位ms，正数，数值越小越快，正常范围在1～100之间，默认15ms
   * @default 15
   */
  speed?: number;
  /**
   * @description extraInfo是传给外部调用者的附加信息，点击按钮时拿到，作为执行点击按钮回调的入参
   * @default {}
   */
   extraInfo?: unknown;
  /**
   * @description 右滑漏出左侧操作区
   */

  left?: ISwipeButton[];
  /**
   * @description 左滑漏出右侧操作区
   */

  right?: ISwipeButton[];

  /**
   * @description
   * 点击左侧按钮回调，extraInfo是一个对象，
   * extraInfo包含若干属性，支持用户传入附加参数，以实现组件使用者的删除逻辑
   * 属性添加方式参考demo示例
   */
  onLeftButtonTap?:
  (index: number, text: string, type: string, extraInfo: unknown, dateSet: Record<string, any>) => void;
  /**
   * @description 点击右侧按钮回调，extraInfo是一个对象，
   * extraInfo包含若干属性，支持用户传入附加参数，以实现组件使用者的删除逻辑
   * 属性添加方式参考demo示例
   */
  onRightButtonTap?:
  (index: number, text: string, type: string, extraInfo: unknown, dateSet: Record<string, any>) => void;
  /**
   * @description 获取组件实例与设置滑动距离
  */
  onGetRef?: ISwipeActionRef;
}
export declare const SwipeActionDefaultProps: Partial<ISwipeActionProps>;

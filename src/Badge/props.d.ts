import { IBaseProps } from '../_base';
/**
 * @description 徽标，红点、数字或文字。用于告诉用户待处理的事物或更新数。
 */

export interface IBadgeProps extends IBaseProps {
  /**
   * @description badge 类型
   * @default dot
   */
  type?: 'dot' | 'number' | 'text' | 'bubble';
  /**
   * @description 数字内容，超过 99 会自动变成 99+
   */
  number?: number;
  /**
   * @description 红点内容，为空时表示只显示红点；可以是数字，也可以是文字；如果是数字，超过 99 会自动变成 ...
   */
  text?: string | number;
  /**
   * @description 相对于 children 所在访问，left-top(左上角) top-right(右上角)
   * @default "top-right"
   */
  position?:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'left'
    | 'right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';
  /**
   * @description 水平方向偏移量（字符串类型，需要带上像素单位）
   * @default "-50%"
   */
  offsetX?: string;
  /**
   * @description 垂直方向偏移量（字符串类型，需要带上像素单位）
   * @default "-50%"
   */
  offsetY?: number;
  /**
   * @description 是否有描边
   * @default false
   */
  stroke?: boolean;
  /**
   * @description 自定义图标
   */
  iconType?: string;
  /**
   * @description 背景色
   */
  bgColor?: string;
}
export declare const BadgeDefaultProps: Partial<IBadgeProps>;

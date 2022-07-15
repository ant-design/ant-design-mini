import { IBaseProps } from '../_base';

/**
 * @description 分割线
 */

export interface IDividerProps extends IBaseProps {
  /**
   * @description 分割线颜色
   * @default '#eee'
   */
  borderColor: string;

  /**
   * @description 分割线类型，支持css内置的值
   * @default 'solid'
   */
  borderStyle: string;

  /**
   * @description 分割线文字颜色
   * @default '#333'
   */
  color: string;

  /**
   * @description 分割线方向
   * @default 'horizontal'
   */
  direction: 'horizontal' | 'vertical';

  /**
   * @description 分割线高度，direction为'vertical'时生效
   * @default '30rpx'
   */
  height: string;

  /**
   * @description 分割线间距， direction为'horizontal'表示垂直间距，direction为'vertical'表示水平间距
   * @default '16rpx'
   */
  margin: string;

  /**
   * @description 分割线
   * @default 'center'
   */
  textPosition: 'left' | 'center' | 'right';
}

export declare const DividerDefaultProps: Partial<IDividerProps>;

import { IBaseProps } from '../_base';

export interface IRateProps extends IBaseProps {
  /**
   * @description 初始星级，默认 0
   */
  defaultValue?: number;

  /**
   * @description 当前数，受控值
   */
  value?: number;

  /**
   * @description 是否允许半星
   */
  allowHalf?: boolean;

  /**
   * @description 是否允许再次点击后清除
   */
  allowClear?: boolean;

  /**
   * @description 只读，无法进行交互
   */
  readOnly?: boolean;

  /**
   * @description 最大星级，默认 5
   */
  maxRate?: number;

  /**
   * @description 填充色
   */
  activeColor?: string;

  /**
   * @description 原始填充色
   */
  inactiveColor?: string;

  /**
   * @description 自定义图片
   */
  image?: string;

  /**
   * @description 打分结束回调
   */
  onRateEnd?: (rate: number) => void;
}
export declare const RateDefaultProps: Partial<IRateProps>;

import { IBaseProps } from '../_base';

export interface IRateProps extends IBaseProps {
  /**
   * @description 当前星级
   */
  rate?: number;

  /**
   * description 初始星级
   */
  defaultRate?: number;

  /**
   * description 间距
   */
  gutter?: number;

  /**
   * @description 是否允许半星
   */
  allowHalf?: boolean;

  /**
   * @description 是否允许再次点击后清除
   */
  allowClear?: boolean;

  /**
   * @description star 总数
   */
  count?: number;

  /**
   *  @description 自定义字符选中状态类名
   */
  characterActiveClassName?: string;

  /**
   *  @description 自定义字符类名
   */
  characterClassName?: string;

  /**
   * @description 是否只读
   */
  readonly?: boolean;

  /**
   * @description 打分结束回调
   */
   onChange?: (rate: number) => void;
}

export declare const RateDefaultProps: Partial<IRateProps>;

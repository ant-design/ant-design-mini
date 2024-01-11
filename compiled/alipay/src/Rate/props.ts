import { IBaseProps } from '../_util/base';

export interface IRateProps extends IBaseProps {
  /**
   * @description 当前星级
   */
  value: number;

  /**
   * description 初始星级
   */
  defaultValue: number;

  /**
   * description 间距
   */
  gutter: number;

  /**
   * @description 是否允许半星
   */
  allowHalf: boolean;

  /**
   * @description 是否允许再次点击后清除
   */
  allowClear: boolean;

  /**
   * @description star 总数
   */
  count: number;

  /**
   *  @description 自定义字符选中状态类名
   */
  characterActiveClassName: string;

  /**
   *  @description 自定义字符类名
   */
  characterClassName: string;

  /**
   * @description 是否只读
   */
  readonly: boolean;

  /**
   * @description 打分结束回调
   */
  onChange?: (rate: number) => void;
}

export const RateDefaultProps: Partial<IRateProps> = {
  count: 5,
  gutter: 4,
  allowClear: true,
};

export const RateFunctionalProps: Partial<IRateProps> = {
  value: null,
  defaultValue: null,
  gutter: 4,
  allowHalf: false,
  allowClear: true,
  count: 5,
  characterActiveClassName: '',
  characterClassName: '',
  readonly: false,
};

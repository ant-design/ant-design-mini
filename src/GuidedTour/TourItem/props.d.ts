import { IBaseProps } from '../../_base';

export interface ITourItem extends IBaseProps {
  /**
   * @description 小程序必填，用于标记当前是第几步，建议按顺序递增
   */
  index?: number;
  /**
   * @description 标题
   */
  title?: string;
  /**
   * @description 补充信息
   */
  desc?: string;
  /**
   * @description 当页面有多个GuidedTour时需传入，页面必须唯一，与外部的 GuidedTour 组件的 uid 一致
   */
  uid?: string;
}
export declare const TourItemDefaultProps: Partial<ITourItem>;

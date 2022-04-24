import { IBaseProps } from '../_base';
/**
 * @description 下拉筛选，内部结合 Selector 实现条件选择。
 */

export interface IFilterProps extends IBaseProps {
  /**
   * @description 当页面有多个Filter时需传入，页面唯一，与内部的 FilterItem 组件的 uid 一致
   * @default 'filter'
   */
  uid?: string;
}
export declare const FilterDefaultProps: Partial<IFilterProps>;

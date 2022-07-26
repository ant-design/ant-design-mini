/* eslint-disable @typescript-eslint/no-explicit-any */
import { IBaseProps } from '../../_base';
/**
 * @description 下拉筛选内部元素，必须配合 Filter 使用。
 */

export interface IFilterItemProps extends IBaseProps {
  /**
   * @description 类型 default=单选 multiple=多选 custom=自定义面板(通过 ref.setValue 设置值)
   * @default "default"
   */
  type?: 'default' | 'multiple' | 'custom';
  /**
   * @description 每一项的值，该组件仅支持受控模式
   */
  value?: any;
  /**
   * @description value 发生变更
   */
  onChange?: (v: any, e: Record<string,any>) => void;
  /**
   * @description 面板展开是触发，以便用户可以滚动定位
   */
  onOpen?: (e: Record<string,any>) => void;
  /**
   * @description type=default type=multiple 有效，为 selector 所需数据
   */
  items?: {
    value: string;
    text: string;
    subText?: string;
  }[];
  /**
   * @description 当该项值为空的时候显示文案
   */
  placeholder?: string;
  /**
   * @description 显示文案转换逻辑
   */
  onFormat?: (v: any) => string;
  /**
   * @description 当页面有多个Filter时需传入，页面唯一，与外部的Filter组件的 uid 一致
   * @default 'filter'
   */
  uid?: string;
}
export declare const FilterItemDefaultProps: Partial<IFilterItemProps>;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { IBaseProps } from '../../_base';

interface IFilterItem {
  value: string;
  text: string;
  subText?: string;
}

/**
 * @description 下拉筛选内部元素，必须配合 Filter 使用。
 */

export interface IFilterItemProps extends IBaseProps {
  /**
   * @description 类型 default=单选 multiple=多选
   * @default "default"
   */
  type?: 'default' | 'multiple';
  /**
   * @description 每一项的值
   */
  value?: ArrayOrItem<string>;
  /**
   * @description value 发生变更
   */
  onChange?: (v: ArrayOrItem<string>, e: Record<string, any>) => void;
  /**
   * @description multiple下确定触发
   */
  onOK?: (v: ArrayOrItem<string>, e: Record<string, any>) => void;
  /**
   * @description 面板展开是触发，以便用户可以滚动定位
   */
  onOpen?: (e: Record<string, any>) => void;
  /**
   * @description type=default type=multiple 有效，为 selector 所需数据
   */
  items?: IFilterItem[];
  /**
   * @description 当该项值为空的时候显示文案
   */
  placeholder?: string;
  /**
   * @description 显示文案转换逻辑
   */
  onFormat?: (selected: ArrayOrItem<IFilterItem>) => string;
}
export declare const FilterItemDefaultProps: Partial<IFilterItemProps>;

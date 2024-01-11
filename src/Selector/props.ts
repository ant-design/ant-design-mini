import { IBaseProps } from '../_util/base';

export type Value = string | number;
export interface ISelectorItem {
  /**
   * @description 主文案
   */
  text: string;
  /**
   * @description 选项值，在同一个 Selector 中唯一
   */

  value: Value;
  /**
   * @description 辅助文案
   */

  subText?: string;
  /**
   * @description 单个禁用
   */

  disabled?: boolean;
}
/**
 * @description 筛选器，可供用户进行单选或者多选。
 */

export interface ISelectorProps extends IBaseProps {
  /**
   * @description 已选择项, 取 items 每一项的 value
   */
  value: Value | Value[];
  /**
   * @description 默认选择项, 取 items 每一项的 value
   */
  defaultValue: Value | Value[];
  /**
   * @description 可选项
   */

  options: ISelectorItem[];
  /**
   * @description 每一项激活时新加类名
   */

  activeItemClassName: string;
  /**
   * @description 每一项激活时样式
   */

  activeItemStyle: string;
  /**
   * @description 是否允许多选
   * @default false
   */

  multiple: boolean;

  /**
   * @description 最小选择数量
   */
  minSelectedCount: number;
  /**
   * @description 最大选择数量
   */
  maxSelectedCount: number;

  disabled?: boolean;

  onChange?(
    value: Value | Value[] | undefined,
    item: ISelectorItem | ISelectorItem[] | undefined,
    e: Record<string, any>
  ): void;
  /**
   * @description 触发最大限制
   */
  onSelectMax?(value: Value, item: ISelectorItem, e: Record<string, any>): void;
  /**
   * @description 触发最小限制
   */
  onSelectMin?(value: Value, item: ISelectorItem, e: Record<string, any>): void;
}

export const SelectorDefaultProps: Partial<ISelectorProps> = {
  multiple: false,
  disabled: false,
};

export const SelectorFunctionalProps: Partial<ISelectorProps> = {
  value: null,
  defaultValue: null,
  options: null,
  activeItemClassName: '',
  activeItemStyle: '',
  multiple: false,
  minSelectedCount: null,
  maxSelectedCount: null,
  disabled: false,
};

import { IBaseFormItemPropsWithOutFocus } from '../_base';

export interface ISelectorItem {
  /**
   * @description 主文案
   */
  text: string;
  /**
   * @description 选项值，在同一个 Selector 中唯一
   */

  value: string;
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

export interface ISelectorProps
  extends IBaseFormItemPropsWithOutFocus<string[]> {
  /**
   * @description 已选择项, 取 items 每一项的 value
   */
  value?: string[];
  /**
   * @description 可选项
   */

  items: ISelectorItem[];
  /**
   * @description 每一项激活时新加类名
   */

  activeItemClassName?: string;
  /**
   * @description 是否允许多选
   * @default false
   */

  multiple?: boolean;

  /**
   * @description 是否受控
   * @default false
   */
  controlled?: boolean;
  /**
   * @description 最小选择数量
   */
  minSelectedCount?: number;
  /**
   * @description 最大选择数量
   */
  maxSelectedCount?: number;
  /**
   * @description 触发最大限制
   */
  onSelectMax(value: string, item: ISelectorItem, e: Record<string, any>): void;
  /**
   * @description 触发最小限制
   */
  onSelectMin(value: string, item: ISelectorItem, e: Record<string, any>): void;
}
export declare const SelectorDefaultProps: Partial<ISelectorProps>;

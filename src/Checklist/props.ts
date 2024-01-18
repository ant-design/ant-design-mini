import { IBaseProps } from '../_util/base';

/**
 * @description 可勾选列表
 */

export interface ChecklistItem {
  /**
   * @description 可勾选项的描述文案
   */
  description?: string;

  /**
   * @description 可勾选项的图片地址
   */
  image?: string;

  /**
   * @description 可勾选项的标题文案
   */
  title: string;

  /**
   * @description 可勾选项的值
   */
  value: string | number;

  disabled?: boolean;
  readonly?: boolean;
}

export interface IChecklistProps extends IBaseProps {
  /**
   * @description 默认值
   */
  value: Array<string | number> | string | number;
  /**
   * @description 默认值
   */
  defaultValue: Array<string | number> | string | number;

  /**
   * @description 是否支持多选
   * @default false
   */
  multiple: boolean;

  /**
   * @description 可勾选列表数据配置选项内容
   */
  options: Array<ChecklistItem>;

  /**
   * @description 可勾选列表值改变时触发
   */
  onChange: (
    v: Array<string | number> | string | number,
    item: ChecklistItem | Array<ChecklistItem>,
    e: Record<string, any>
  ) => void;
}

export const ChecklistDefaultProps: Partial<IChecklistProps> = {
  multiple: false,
  options: [],
};

export const ChecklistFunctionalProps: Partial<IChecklistProps> = {
  value: null,
  defaultValue: null,
  multiple: false,
  options: [],
};

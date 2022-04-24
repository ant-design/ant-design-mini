import { IBaseProps } from '../../_base';

/**
 * @description 可勾选列表单项
 */

interface IChecklistItemProps extends IBaseProps {
  /**
   * @description 当前选项的描述文案
   */
  description: string;

  /**
   * @description 当前选项是否禁用
   * @default false
   */
  disabled: boolean;

  /**
   * @description 当前选项的图片
   */
  image: string;

  /**
   * @description 是否支持多选
   * @default false
   */
  multiple: boolean;

  /**
   * @description 当前选项的选项值
   * @default ''
   */
  optionValue: string | number;

  /**
   * @description 当前选项是否只读
   * @default false
   */
  readOnly: boolean;

  /**
   * @description 可勾选列表的值
   */
  value: Array<string | number>;

  /**
   * @description 当项选项值改变时触发
   */
  onChange: (v: string | number) => any
}

export declare const ChecklistItemDefaultProps: Partial<IChecklistItemProps>;

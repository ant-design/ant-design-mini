import { IBaseProps } from '../../_base';
import { ChecklistItem } from '../props'

/**
 * @description 可勾选列表单项
 */

interface IChecklistItemProps extends IBaseProps {
  /**
   * @description 是否支持多选
   * @default false
   */
  multiple: boolean;

  
  item: ChecklistItem

  /**
   * @description 可勾选列表的值
   */
  value: Array<string | number>| string| number;

  /**
   * @description 当项选项值改变时触发
   */
  onChange: (v: string | number) => any
}

export declare const ChecklistItemDefaultProps: Partial<IChecklistItemProps>;

import { IBaseProps } from '../../_util/base';
import { ChecklistItem } from '../props';

/**
 * @description 可勾选列表单项
 */

interface IChecklistItemProps extends IBaseProps {
  item: ChecklistItem;
  checked: boolean;
  /**
   * @description 当项选项值改变时触发
   */
  onChange: (item: ChecklistItem) => void;
}

export const ChecklistItemDefaultProps: Partial<IChecklistItemProps> = {
};

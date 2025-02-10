// @ts-nocheck
import { IBaseProps } from '../_util/base';

interface IActionItem {
  /**
   * @description 操作文本
   */
  label: string;
  /**
   * @description 图标地址
   */
  icon?: string;
}

interface IActionsProps extends IBaseProps {
  /**
   * @description 操作列表
   */
  items: IActionItem[];
  /**
   * @description 点击操作的回调
   */
  onItemTap?: (action: IActionItem) => void;
}

export const ActionsProps: IActionsProps = {
  items: [],
  onItemTap: () => {},
};

export type { IActionsProps };

import { IBaseProps } from '../_base';
/**
 * @description 纵向选项卡，内部配合 VTabItem 使用。
 */

export interface IVTabsProps extends IBaseProps {
  /**
   * @description 当前激活的索引
   * @default 0
   */
  index?: number;
  /**
   * @description tab 切换时的回调
   */

  onChange?: (index: number) => void;
}
export declare const VTabsDefaultProps: Partial<IVTabsProps>;

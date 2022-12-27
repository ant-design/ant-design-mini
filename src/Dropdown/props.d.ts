import { IBaseProps } from '../_base';

export interface IDropdownItem {
  title: string;
}
/**
 * @description 下拉菜单
 */
export interface IDropdownProps extends IBaseProps {
  /**
   * @description 展开项
   */
  current?: number;
  /**
   * @description 选中初始值
   */
  defaultCurrent?: number;
  showMask?: boolean;
  items: IDropdownItem[];
  onChange(current: number): void;
}

export declare const DropdownDefaultProps: Partial<IDropdownProps>;

import { IBaseProps } from '../_base';

/**
 * @description 手风琴
 */
export interface ICollapseProps extends IBaseProps {
  /**
   * @description collapse 切换时的回调
   */

  onChange?: (current: number[] | number, e: Record<string, any>) => void;
  /**
   * @description 是否是手风琴模式，仅一个内容被展开
   */

  /**
   * @description 选中
   */
  current: number[] | number;

  /**
   * @description accordion模式
   */
  accordion?: boolean;

  /**
   * @description 列表
   */
  items: number[];
  
}
export declare const CollapseDefaultProps: Partial<ICollapseProps>;

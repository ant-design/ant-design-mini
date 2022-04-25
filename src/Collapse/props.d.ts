import { IBaseProps } from '../_base';

/**
 * @description 手风琴，内部由多个 CollapseItem 组成。
 */
export interface ICollapseProps extends IBaseProps {
  /**
   * @description 当前激活的索引
   * @default []
   */
  name?: string[];
  /**
   * @description collapse 切换时的回调
   */

  onChange?: (index: string[]) => void;
  /**
   * @description 是否是手风琴模式，仅一个内容被展开
   */

  accordion?: boolean;
  /**
   * @description 当页面有多个Collapse时需传入，页面唯一，与内部的 CollapseItem 组件的 uid 一致
   * @default 'Collapse'
   */
  uid?: string;
}
export declare const CollapseDefaultProps: Partial<ICollapseProps>;

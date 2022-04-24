import { IBaseProps } from '../../_base';
/**
 * @description 手风琴内部元素，必须配合 Collapse 使用。
 */

export interface ICollapseItemProps extends IBaseProps {
  /**
   * @description 标题图标
   */
  icon?: string;
  /**
   * @description 标题栏内容
   */
  title?: string;
  /**
   * @description 标识，必须唯一
   */
  name: string;
  /**
   * @description 禁用状态，默认为 false
   */
  disabled: boolean;
  /**
   * @description 副标题
   */
  brief?: boolean;
  /**
   * @description 面板展开图标
   */
  expandIcon: string;
  /**
   * @description 面板收缩图标
   */
  closeIcon: string;
  /**
   * @description 当页面有多个Collapse时需传入，页面唯一，与外部的 Collapse 组件的 uid 一致
   * @default 'Collapse'
   */
  uid?: string;
}
export declare const CollapseItemDefaultProps: Partial<ICollapseItemProps>;

import { IBaseProps } from '../../_base';
/**
 * @description 纵向选项卡内部元素，必须配合 VTabs 使用。
 */

export interface IVTabItemProps extends IBaseProps {
  /**
   * @description 每一项 tab 内容
   */
  tab: {
    /**
     * @description 选项标题
     */
    title: string;
    /**
     * @description 附加内容数字提醒
     */

    badge?: number;

    /**
     * @description 是否禁用该选项
     */
    disabled?: boolean
  };
}
export declare const VTabItemDefaultProps: Partial<IVTabItemProps>;

import { IBaseProps } from '../../_base';
/**
 * @description 标签栏内部元素，必须配合 Tabs 使用。
 */

export interface ITabItemProps extends IBaseProps {
  /**
   * @description 
   */
  uid: string
  /**
   * @description 每一项 tab 内容
   */
  tab: {
    /**
     * @description 选项标题
     */
    title: string;
    /**
     * @description 选项副标题，在 tabs.type===mixin 时有效
     */

    subTitle?: string;
    /**
     * @description 附加内容数字提醒
     */

    badge?: number;

    /**
     * @description 是否禁用该选项
     * @default: false
     */
    disabled?: boolean
  };
}
export declare const TabItemDefaultProps: Partial<ITabItemProps>;

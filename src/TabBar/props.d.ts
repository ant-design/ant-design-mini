import { IBaseProps } from '../_base';
import { IBadgeProps } from '../Badge/props.d';

export interface ITabsConfig {
  /**
   * @description 底部图标，支持 Icon 或图片
   * @default ''
   */
  icon?: string;

  /**
   * @description 高亮状态的底部图标，支持 Icon 或图片
   * @default ''
   */
  activeIcon?: string;


  /**
   * @description 底部的文本信息
   * @default ''
   */
  text: string;
  /**
   * @description 徽标，参见 <Badge/> 组件
   * @default undefined
   */
  badge?: IBadgeProps;
}

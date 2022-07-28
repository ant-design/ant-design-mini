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
   * @description 图片类型 Tab 的适配模式，默认为 aspectFit
   * @default 'aspectFit'
   */
  imageMode?: string;

  // /**
  //  * @description 是否展示徽标
  //  * @default false
  //  */
  // badge?: boolean;

  // /**
  //  * @description 徽标类型，参见 <Badge/> 组件
  //  * @default ''
  //  */
  // badgeType?: string;

  // /**
  //  * @description 徽标内容，参见 <Badge/> 组件
  //  * @default ''
  //  */
  // badgeText?: string;

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

/**
 * @description 标签栏，内部配合 TabItem 使用。
 */
export interface ITabBarProps extends IBaseProps {
  /**
   * @description tabbar 配置，为一个数组
   * @default []
   */
  tabs?: ITabsConfig[];

  /**
   * @description 默认高亮的 key，默认无高亮
   * @default undefined
   */
  activeKey?: number;

  /**
   * @description 高亮状态图标和文本的颜色
   * @default '#1677ff'
   */
  activeColor: string;

  /**
   * @description 最大展示的 tab 数量，默认为 5，建议不要超过 5 个
   * @default 5
   */
  maxTabCount?: number;

  /**
   * @description tabbar 切换时的回调
   */
  onChange?: (config: ITabsConfig, index: number) => void;
}
export declare const TabBarDefaultProps: Partial<ITabBarProps>;

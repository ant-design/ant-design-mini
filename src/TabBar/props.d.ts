import { IBaseProps } from '../_base';
import { IBadgeProps } from '../Badge/props.d';

export interface ITabItem {
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

/**
 * @description 标签栏，内部配合 TabItem 使用。
 */
export interface ITabBarProps extends IBaseProps {
  /**
   * @description tabbar 配置，为一个数组
   * @default []
   */
  items: ITabItem[];

  /**
   * @description 选中
   */
  current?: number;
  /**
   * @description 初始值
   */
  defaultCurrent?: number;

  /**
   * @description 高亮状态图标和文本的颜色
   */
  activeColor?: string;

  /**
   * @description tabbar 切换时的回调
   */
  onChange?: (index: number, e: Record<string, any>) => void;
}
export declare const TabBarDefaultProps: Partial<ITabBarProps>;

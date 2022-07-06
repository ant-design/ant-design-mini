/* eslint-disable @typescript-eslint/no-explicit-any */
import { IBaseProps } from '../_base';

export interface ISkeletonBaseProps extends IBaseProps {
  /**
   * @description 为 true 时，显示占位图。反之则直接展示子组件
   * @default true
   */
  loading?: boolean;
  /**
   * @description 是否展示动画效果
   * @default false
   */
  animate?: boolean;
}
/**
 * @description 骨架屏
 */
export interface ISkeletonProps extends ISkeletonBaseProps {
  /**
   * @description 是否显示头像占位图
   * @default false
   */
  avatar?: boolean;
  /**
   * @description 是否显示标题占位图
   * @default true
   */
  title?: boolean;
  /**
   * @description 段落行数
   * @default 3
   */
  rows?: number;
  /**
   * @description 头像大小
   * @default '88rpx''
   */
  avatarSize?:string;
  /**
   * @description 头像形状
   * @default 'circle'
   */
  avatarShape?: 'circle' | 'square';
}
export declare const SkeletonDefaultProps: ISkeletonProps;

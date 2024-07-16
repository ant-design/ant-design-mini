/* eslint-disable @typescript-eslint/no-explicit-any */
import { IBaseProps } from '../_util/base';

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
  avatar?:
    | boolean
    | {
        shape?: 'circle' | 'square';
        size?: 'x-small' | 'small' | 'medium' | 'large';
      };
  /**
   * @description 是否显示标题占位图
   * @default true
   */
  title?: boolean;
  /**
   * @description 段落
   * @default true
   */
  paragraph?:
    | boolean
    | {
        rows?: number;
      };
}

export const SkeletonDefaultBaseProps: ISkeletonBaseProps = {
  loading: true,
  animate: false,
};

export const SkeletonDefaultProps: Partial<ISkeletonProps> = {
  loading: true,
  animate: false,
  avatar: false,
  title: true,
  paragraph: true,
};

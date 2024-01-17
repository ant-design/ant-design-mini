import { ISkeletonBaseProps, SkeletonDefaultBaseProps } from '../props';

export interface SkeletonTitleProps extends ISkeletonBaseProps {}

export const SkeletonTitleDefaultProps: Partial<SkeletonTitleProps> = {
  ...SkeletonDefaultBaseProps,
};

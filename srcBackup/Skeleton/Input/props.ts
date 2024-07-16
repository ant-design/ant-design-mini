import { ISkeletonBaseProps, SkeletonDefaultBaseProps } from '../props';

export interface SkeletonInputProps extends ISkeletonBaseProps {}

export const SkeletonInputDefaultProps: Partial<SkeletonInputProps> = {
  ...SkeletonDefaultBaseProps,
};

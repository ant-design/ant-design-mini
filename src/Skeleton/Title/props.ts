import { ISkeletonBaseProps } from '../props';

export interface SkeletonTitleProps extends ISkeletonBaseProps {
}

export const SkeletonTitleDefaultProps: Partial<SkeletonTitleProps> = {
  loading: true,
};

import { ISkeletonBaseProps, SkeletonDefaultBaseProps } from '../props';

export interface SkeletonButtonProps extends ISkeletonBaseProps {
  size?: 'small' | 'medium' | 'large';
}

export const SkeletonButtonDefaultProps: Partial<SkeletonButtonProps> = {
  ...SkeletonDefaultBaseProps,
  size: 'medium',
};

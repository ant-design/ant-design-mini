import { ISkeletonBaseProps } from '../props';

export interface SkeletonAvatarProps extends ISkeletonBaseProps {
  shape: 'circle' | 'square';
  size: 'x-small' | 'small' | 'medium' | 'large';
}

export const SkeletonAvatarDefaultProps: Partial<SkeletonAvatarProps> = {
  shape: 'square',
  loading: true,
  size: 'medium',
};

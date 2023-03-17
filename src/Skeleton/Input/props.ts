import { ISkeletonBaseProps } from '../props';

export interface SkeletonInputProps extends ISkeletonBaseProps {
}

export const SkeletonInputDefaultProps: Partial<SkeletonInputProps> = {
  loading: true,
};

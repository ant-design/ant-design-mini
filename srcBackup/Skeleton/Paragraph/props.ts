import { ISkeletonBaseProps, SkeletonDefaultBaseProps } from '../props';

export interface SkeletonParagraphProps extends ISkeletonBaseProps {
  rows: number;
}

export const SkeletonParagraphDefaultProps: Partial<SkeletonParagraphProps> = {
  ...SkeletonDefaultBaseProps,
  rows: 3,
};

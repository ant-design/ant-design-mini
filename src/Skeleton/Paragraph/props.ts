import { ISkeletonBaseProps } from '../props';

export interface SkeletonParagraphProps extends ISkeletonBaseProps {
  rows: number;
}

export const SkeletonParagraphDefaultProps: Partial<SkeletonParagraphProps> = {
  loading: true,
  rows: 3,
};

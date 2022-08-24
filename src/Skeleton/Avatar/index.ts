import { ISkeletonBaseProps } from '../props';

interface IProps extends ISkeletonBaseProps {
  shape?: 'circle' | 'square';
  size?: string;
}
Component<Record<string, never>, IProps>({
  props: {
    shape: 'square',
    loading: true,
  },
});

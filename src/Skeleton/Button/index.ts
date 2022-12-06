import { ISkeletonBaseProps } from '../props';

interface IProps extends ISkeletonBaseProps {
  size?: string;
}
Component<Record<string, never>, IProps>({
  props: {
    loading: true,
    size: 'medium',
  },
});

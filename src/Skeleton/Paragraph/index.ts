import { ISkeletonBaseProps } from '../props';

interface IProps extends ISkeletonBaseProps {
  rows?: number;
}
Component<Record<string, never>, IProps>({
  props: {
    loading: true,
    rows: 3,
    style: ''
  },
});

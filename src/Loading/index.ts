import { LoadingDefaultProps } from './props';

Component({
  props: LoadingDefaultProps,
  data: {
    _loading: false,
  },
  didMount() {
    this.setLoading();
  },
  didUpdate(prevProps) {
    if (prevProps.loading !== this.props.loading) {
      this.setLoading();
    }
  },
  methods: {
    setLoading() {
      const { loading } = this.props;

      if (loading && !this.data._loading) {
        this.setData({
          _loading: true,
        });
      } else if (!loading && this.data._loading) {
        this.setData({
          _loading: false,
        });
      }
    },
  },
});

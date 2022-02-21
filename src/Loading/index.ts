import { LoadingDefaultProps } from './props';

/**
 * 注意，delay 的变更不能实时生效
 */
Component({
  props: LoadingDefaultProps,
  data: {
    // 决定实际是否渲染加载中状态
    _loading: false,
  },
  didMount() {
    this.setLoading();
  },
  didUpdate(prevProps) {
    if (prevProps.loading !== this.props.loading) {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.setLoading();
    }
  },
  methods: {
    setLoading() {
      const { delay, loading } = this.props;
      const realDelay: number = isNaN(delay) ? 0 : delay;

      if (loading && !this.data._loading) {
        this.timeout = setTimeout(() => {
          this.setData({
            _loading: true,
          });
        }, realDelay);
      } else if (!loading && this.data._loading) {
        this.setData({
          _loading: false,
        });
      }
    },
  },
});

import { TipsDefaultProps } from './props';

Component({
  props: TipsDefaultProps,
  data: {
    _show: false,
    textType: 'multi',
  },
  didMount() {
    this.setData({
      _show: this.props.visible,
    });
    this.getTextType();
  },
  didUpdate(prevProps) {
    if (prevProps.visible !== this.props.visible) {
      this.setData({
        _show: this.props.visible,
      });
      if (this.props.visible === false) {
        this.beforeClose();
      }
    }
    if (prevProps.title !== this.props.title) {
      this.getTextType();
    }
  },
  methods: {
    getTextType() {
      my.createSelectorQuery()
        .select(`.amd-tips-${this.$id} .amd-tips-title`)
        .boundingClientRect()
        .exec((ret) => {
          if (ret && ret[0] && ret[0].height) {
            this.setData({ textType: ret[0].height < 30 ? 'single' : 'multi' });
          }
        });
    },
    onButtonTap() {
      const { onButtonTap } = this.props;
      if (onButtonTap) {
        return onButtonTap();
      }
    },
    onHideTips(t) {
      this.setData({
        _show: t,
      });
      this.beforeClose();
    },
    beforeClose() {
      if (typeof this.props.onClose === 'function') {
        this.props.onClose();
      }
    },
  },
});

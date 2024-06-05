Component({
  data: {
    native: false,
  },
  didMount() {
    if (this.renderer === 'native') {
      this.setData({
        native: true,
      });
    }
  },
  methods: {
    onButtonTap() {
      const { onButtonTap } = this.props;
      if (typeof onButtonTap === 'function') {
        return onButtonTap();
      }
    },
    onHideTips() {
      const { onHideTips } = this.props;
      if (typeof onHideTips === 'function') {
        return onHideTips(false);
      }
    },
  },
});

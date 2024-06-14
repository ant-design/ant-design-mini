Component({
  data: {
    native: false,
  },
  didMount() {
    this.setData({
      native: this.renderer === 'native',
    });
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

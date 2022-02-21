Component({
  props: {
    size: '200rpx',
    className: '',
    color: '#999',
    height: '',
  },
  didUpdate() {
    const { color } = this.props;
    this.setData({
      color,
    });
  },
});

Component({
  props: {
    className: '',
    payload: '',
    disabled: false,
  },
  methods: {
    onTap(e) {
      if (typeof this.props.onTap === 'function') {
        this.props.onTap(e);
      }
    },
  },
});

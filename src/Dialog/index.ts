import { DialogDefaultProps } from './props';

Component({
  props: DialogDefaultProps,
  methods: {
    onButtonTap(e) {
      const { onButtonTap } = this.props;
      if (typeof onButtonTap === 'function') {
        const { index } = e.currentTarget.dataset;
        return onButtonTap(index);
      }
    },
    onClose() {
      if (typeof this.props.onClose === 'function') {
        this.props.onClose();
      }
    },
  },
});

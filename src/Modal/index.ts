import { ModalDefaultProps } from './props';

Component({
  props: ModalDefaultProps,
  data: {
    isShowBtn: true,
  },
  methods: {
    onClose() {
      const { onClose } = this.props;
      if (typeof onClose === 'function') {
        return onClose();
      }
    },
    onButtonTap(e) {
      const { onButtonTap } = this.props;
      if (typeof onButtonTap === 'function') {
        const { type } = e.currentTarget.dataset;
        return onButtonTap(type);
      }
    },
  },
});

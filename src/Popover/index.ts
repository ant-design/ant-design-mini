import { PopoverDefaultProps } from './props';

Component({
  props: PopoverDefaultProps,
  methods: {
    onVisibleChange() {
      const { onVisibleChange, visible } = this.props;
      if (onVisibleChange) {
        return onVisibleChange(!visible);
      }
    },
    onMaskTap() {
      const { maskClosable } = this.props;
      if (maskClosable) {
        this.onVisibleChange();
      } else {
        return false;
      }
    },
  },
});

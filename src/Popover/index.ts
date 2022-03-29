import { PopoverDefaultProps } from './props';

Component({
  props: PopoverDefaultProps,
  methods: {
    onVisibleChange() {
      const { onVisibleChange, visible } = this.props;
      if (onVisibleChange) {
        return onVisibleChange(!visible, 'component');
      }
    },
    onMaskTap() {
      const { maskClosable, onVisibleChange } = this.props;
      if (maskClosable && onVisibleChange) {
        onVisibleChange(false, 'mask');
      } else {
        return false;
      }
    },
  },
});

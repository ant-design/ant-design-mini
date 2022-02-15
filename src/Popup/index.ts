import { PopupDefaultProps } from './props';

Component({
  props: PopupDefaultProps,
  data: {
    classNames: '',
    supportSjs: my.canIUse('sjs.event'),
  },
  deriveDataFromProps(nextProps) {
    const classNames = [
      nextProps.className || '',
      nextProps.disableScroll ? 'amd-popup-disable-scroll' : '',
      nextProps.animation ? 'amd-popup-animation' : '',
    ];
    this.setData({
      classNames: classNames.join(' ').trim(),
    });
  },
  methods: {
    onMaskClose() {
      const { onClose, maskClosable } = this.props;
      if (maskClosable) {
        onClose?.();
      }
    },
    onClose() {
      const { onClose } = this.props;
      if (onClose) {
        onClose?.();
      }
    },
  },
});

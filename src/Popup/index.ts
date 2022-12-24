import { PopupDefaultProps } from './props';
import { compareVersion } from '../_util/compareVersion';

const SDKVersion = my.SDKVersion;
const isOldVersion = compareVersion(SDKVersion, '2.0.0') < 0;
const component2 = my.canIUse('component2');

Component({
  props: PopupDefaultProps,
  data: {
    closing: false,
    isOldVersion,
  },
  didUpdate(prevProps) {
    if (component2) {
      return;
    }
    const { visible, duration, animation } = this.props;
    if (prevProps.visible && !visible) {
      if (animation && duration > 0) {
        this.setData({ closing: true });
      }
    }
  },
  deriveDataFromProps(nextProps) {
    const { visible, duration, animation } = nextProps;
    if (this.props.visible && !visible) {
      if (animation && duration > 0) {
        this.setData({ closing: true });
      }
    }
  },
  methods: {
    onTapMask() {
      const { closing } = this.data;
      if (closing) {
        return;
      }
      const { onClose } = this.props;
      if (onClose) {
        onClose();
      }
    },
    onAnimationEnd() {
      const { closing } = this.data;
      if (closing) {
        this.setData({ closing: false });
      }
    },
  },
});

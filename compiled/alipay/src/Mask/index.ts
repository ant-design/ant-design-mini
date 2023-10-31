import fmtEvent from '../_util/fmtEvent';
import { MaskDefaultProps } from './props';
import '../_util/assert-component2';

Component({
  props: MaskDefaultProps,
  methods: {
    onMaskClick(e) {
      const { onMaskTap } = this.props;
      if (typeof onMaskTap === 'function') {
        onMaskTap(fmtEvent(this.props, e));
      }
    },
  },
});

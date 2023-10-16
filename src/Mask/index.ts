import fmtEvent from '../_util/fmtEvent';
import { MaskDefaultProps } from './props';
import '../_util/assert-component2';

Component({
  data: {
    supportSjs: my.canIUse('sjs.event'),
  },
  props: MaskDefaultProps,
  methods: {
    onMaskClick(e) {
      const { onMaskTap } = this.props;
      if (typeof onMaskTap === 'function') {
        const event = fmtEvent(this.props, e);
        onMaskTap(event);
      }
    },
  },
});

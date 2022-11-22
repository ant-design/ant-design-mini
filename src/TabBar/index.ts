import { TabBarDefaultProps } from './props';
import fmtEvent from '../_util/fmtEvent';

Component({
  props: TabBarDefaultProps,
  data: {
    selfCurrent: undefined,
  },
  methods: {
    onChange(e) {
      const { index } = e.target.dataset;
      const { current, onChange } = this.props;
      if (typeof current === 'undefined') {
        if (index === this.data.selfCurrent) {
          return;
        }
        this.setData({
          selfCurrent: index,
        });
      } else {
        if (index === current) {
          return;
        }
      }
      if (onChange) {
        onChange(index, fmtEvent(this.props, e));
      }
    },
  },
});

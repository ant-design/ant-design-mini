import { TipsDefaultProps } from './props';
import { log } from '../_util/console';

Component({
  props: TipsDefaultProps,
  data: {
    _show: true,
  },
  didMount() {
    this.showError();
  },
  didUpdate() {
    this.showError();
  },
  methods: {
    showError() {
      const { title } = this.props;
      if (!title) {
        log.warn('Tips', '缺少 title 属性。');
      }
    },
    onButtonTap() {
      const { onButtonTap } = this.props;
      if (onButtonTap) {
        return onButtonTap();
      }
    },
    onHideTips(t) {
      this.setData({
        _show: t,
      });
    },
  },
});

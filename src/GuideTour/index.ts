import equal from 'fast-deep-equal';
import { GuideTourDefaultProps } from './props';
import { changeButtonVisible } from './utils';
import { log } from '../_util/console';

Component({
  data: {
    nextButtonVisible: false,
    lastButtonVisible: false,
    jumpButtonVisible: false,
    knowButtonVisible: false,
  },
  props: GuideTourDefaultProps,
  didMount() {
    const { index } = this.props;
    if (typeof index !== 'number') {
      log.error(
        'GuideTour',
        `当前激活的索引值类型非 number 类型，修改当前 index 的 ${typeof index} 类型，以保证展示的正确性。`
      );
    } else {
      this.buttonController();
    }
  },
  didUpdate(prevProps) {
    if (
      prevProps.index !== this.props.index ||
      !equal(this.props.steps, prevProps.steps)
    )
      this.buttonController();
  },
  methods: {
    onNext() {
      const { onChange, index, steps } = this.props;
      if (index < steps.length - 1 && onChange) {
        onChange(index + 1);
      }
    },

    onPrev() {
      const { onChange, index } = this.props;
      if (index !== 0 && onChange) {
        onChange(index - 1);
      }
    },

    onCancel() {
      const { onCancel } = this.props;
      if (onCancel) {
        onCancel();
      }
    },

    handleSwiperChange(e) {
      const { onChange } = this.props;
      if (onChange) {
        return onChange(e.detail?.current);
      }
    },

    buttonController() {
      const { index, steps } = this.props;
      if (steps.length === 1) {
        this.setData(changeButtonVisible(['knowButtonVisible']));
      } else {
        switch (index) {
          case 0:
            this.setData(
              changeButtonVisible(['jumpButtonVisible', 'nextButtonVisible'])
            );
            break;

          case steps.length - 1:
            this.setData(
              changeButtonVisible(['lastButtonVisible', 'knowButtonVisible'])
            );
            break;
          default:
            this.setData(
              changeButtonVisible(['lastButtonVisible', 'nextButtonVisible'])
            );
            break;
        }
      }
    },
  },
});

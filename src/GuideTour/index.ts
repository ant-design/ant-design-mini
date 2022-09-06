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
    current: 0,
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
      this.setData({ current: index });
      this.buttonController();
    }
  },
  didUpdate(prevProps) {
    const { index } = this.props;
    if (
      (prevProps.index !== index && index !== this.data.current) ||
      !equal(this.props.steps, prevProps.steps)
    ) {
      this.setData({ current: index });
      this.buttonController();
    }
  },
  methods: {
    async onNext() {
      const { onChange, steps } = this.props;
      const { current } = this.data;
      if (current < steps.length - 1) {
        if (!onChange || (await onChange(current + 1)) !== false) {
          this.setData({ current: current + 1 });
          this.buttonController();
        }
      }
    },

    async onPrev() {
      const { onChange } = this.props;
      const { current } = this.data;
      if (current !== 0) {
        if (!onChange || (await onChange(current - 1)) !== false) {
          this.setData({ current: current - 1 });
          this.buttonController();
        }
      }
    },

    onCancel() {
      const { onCancel } = this.props;
      if (onCancel) {
        onCancel();
      }
    },

    async handleSwiperChange(e) {
      const { current } = e.detail;
      const { onChange } = this.props;
      if (!onChange || (await onChange(current)) !== false) {
        this.setData({ current });
        this.buttonController();
      }
    },

    buttonController() {
      const { steps } = this.props;
      const { current } = this.data;
      if (steps.length === 1) {
        this.setData(changeButtonVisible(['knowButtonVisible']));
      } else {
        switch (current) {
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

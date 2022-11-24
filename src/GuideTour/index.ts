import { GuideTourDefaultProps } from './props';

Component({
  data: {
    selfCurrent: undefined,
  },
  props: GuideTourDefaultProps,
  methods: {
    async onNext(e) {
      const { currentValue } = e.target.dataset;
      const { onChange } = this.props;
      const newCurrent = currentValue + 1;
      if (!('current' in this.props)) {
        this.setData({ selfCurrent: newCurrent });
      }
      if (onChange) {
        onChange(newCurrent);
      }
    },

    async onPrev(e) {
      const { currentValue } = e.target.dataset;
      const { onChange } = this.props;
      const newCurrent = currentValue - 1;
      if (!('current' in this.props)) {
        this.setData({ selfCurrent: newCurrent });
      }
      if (onChange) {
        onChange(newCurrent);
      }
    },

    onCancel() {
      const { onCancel } = this.props;
      if (onCancel) {
        onCancel();
      }
    },

    async onSwiperChange(e) {
      const { current } = e.detail;
      const { onChange } = this.props;
      if (!('current' in this.props)) {
        this.setData({ selfCurrent: current });
      }
      if (onChange) {
        onChange(current);
      }
    },
  },
});

import { GuideTourDefaultProps } from './props';
import mixinValue from '../mixins/value';
import '../_util/assert-component2';

Component({
  mixins: [
    mixinValue({
      valueKey: 'current',
      defaultValueKey: 'defaultCurrent',
    }),
  ],
  props: GuideTourDefaultProps,
  methods: {
    async onNext() {
      const currentValue = this.getValue();
      const { onChange } = this.props;
      const newCurrent = currentValue + 1;
      if (!this.isControlled()) {
        this.update(newCurrent);
      }
      if (onChange) {
        onChange(newCurrent);
      }
    },

    async onPrev() {
      const currentValue = this.getValue();
      const { onChange } = this.props;
      const newCurrent = currentValue - 1;
      if (!this.isControlled()) {
        this.update(newCurrent);
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
      if (!this.isControlled()) {
        this.update(current);
      }
      if (onChange) {
        onChange(current);
      }
    },
  },
});

import { PopoverDefaultProps } from './props';
import fmtEvent from '../_util/fmtEvent';
import mixinValue from '../mixins/value';

Component({
  props: PopoverDefaultProps,
  mixins: [
    mixinValue({
      valueKey: 'visible',
      defaultValueKey: 'defaultVisible',
      transformValue(val) {
        const value = val || false;
        return {
          needUpdate: true,
          value,
        };
      },
    }),
  ],
  methods: {
    onVisibleChange() {
      const { onVisibleChange } = this.props;
      const value = !this.getValue();
      if (!this.isControlled()) {
        this.update(value);
      }
      if (onVisibleChange) {
        return onVisibleChange(value, fmtEvent(this.props));
      }
    },
  },
});

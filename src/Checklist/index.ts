import { ChecklistDefaultProps } from './props';
import mixinValue from '../mixins/value';
import fmtEvent from '../_util/fmtEvent';
import '../_util/assert-component2';

Component({
  props: ChecklistDefaultProps,
  mixins: [
    mixinValue({
      transformValue(val) {
        const value = val || [];
        return {
          needUpdate: true,
          value,
        };
      },
    }),
  ],
  methods: {
    onChange(item) {
      const { multiple, options, onChange } = this.props;
      const value = item.value;
      if (multiple) {
        let currentValue = this.getValue();
        if (currentValue.indexOf(value) > -1) {
          currentValue = currentValue.filter((v) => v !== value);
        } else {
          currentValue = [...currentValue, value];
        }
        if (!this.isControlled()) {
          this.update(currentValue);
        }
        if (onChange) {
          onChange(
            currentValue,
            options.filter((v) => currentValue.indexOf(v.value) > -1) as any,
            fmtEvent(this.props)
          );
        }
      } else {
        if (!this.isControlled()) {
          this.update(value);
        }
        if (onChange) {
          onChange(
            value,
            options.find((v) => v.value === value) as any,
            fmtEvent(this.props)
          );
        }
      }
    },
  },
});

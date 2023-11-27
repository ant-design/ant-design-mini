import { SelectorDefaultProps, ISelectorItem } from './props';
import mixinValue from '../mixins/value';
import fmtEvent from '../_util/fmtEvent';
import '../_util/assert-component2';

Component({
  mixins: [mixinValue()],
  props: SelectorDefaultProps,
  methods: {
    onChange(e) {
      const event = fmtEvent(this.props);
      const { disabled, value } = e.currentTarget.dataset;
      const {
        multiple,
        options,
        maxSelectedCount,
        minSelectedCount,
        onSelectMax,
        onSelectMin,
        onChange,
      } = this.props;
      if (disabled || this.props.disabled) {
        return;
      }
      if (multiple) {
        let currentValue = this.getValue() || [];
        if (currentValue.indexOf(value) > -1) {
          if (
            !isNaN(minSelectedCount) &&
            currentValue.length <= minSelectedCount
          ) {
            if (onSelectMin) {
              onSelectMin(
                value,
                options.find((v) => v.value === value) as ISelectorItem,
                event
              );
            }
            return;
          }
          currentValue = currentValue.filter((v) => v !== value);
        } else {
          if (
            !isNaN(maxSelectedCount) &&
            currentValue.length >= maxSelectedCount
          ) {
            if (onSelectMax) {
              onSelectMax(
                value,
                options.find((v) => v.value === value) as ISelectorItem,
                event
              );
            }
            return;
          }
          currentValue = [...currentValue, value];
        }
        if (!this.isControlled()) {
          this.update(currentValue);
        }
        if (onChange) {
          onChange(
            currentValue,
            options.filter((v) => currentValue.indexOf(v.value) > -1),
            fmtEvent(this.props)
          );
        }
      } else {
        if (value === this.getValue()) {
          if (minSelectedCount === 1) {
            if (onSelectMin) {
              onSelectMin(
                value,
                options.find((v) => v.value === value),
                event
              );
            }
            return;
          }
          if (!this.isControlled()) {
            this.update(undefined);
          }
          if (onChange) {
            onChange(undefined, undefined, fmtEvent(this.props));
          }
        } else {
          if (!this.isControlled()) {
            this.update(value);
          }
          if (onChange) {
            onChange(
              value,
              options.find((v) => v.value === value),
              fmtEvent(this.props)
            );
          }
        }
      }
    },
  },
});

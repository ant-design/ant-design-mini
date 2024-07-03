import {
  Component,
  triggerEventValues,
  getValueFromProps,
} from '../_util/simply';
import { SelectorDefaultProps, ISelectorItem } from './props';
import mixinValue from '../mixins/value';

Component(
  SelectorDefaultProps,
  {
    onChange(e) {
      const { disabled, value } = e.currentTarget.dataset;
      const [
        multiple,
        options,
        maxSelectedCount,
        minSelectedCount,
        disabledFromProps,
      ] = getValueFromProps(this, [
        'multiple',
        'options',
        'maxSelectedCount',
        'minSelectedCount',
        'disabled',
      ]);
      if (disabled || disabledFromProps) {
        return;
      }
      if (multiple) {
        let currentValue = this.getValue() || [];
        if (currentValue.indexOf(value) > -1) {
          if (
            typeof minSelectedCount === 'number' &&
            currentValue.length <= minSelectedCount
          ) {
            triggerEventValues(
              this,
              'selectMin',
              [value, options.find((v) => v.value === value) as ISelectorItem],
              e
            );
            return;
          }
          currentValue = currentValue.filter((v) => v !== value);
        } else {
          if (
            typeof maxSelectedCount === 'number' &&
            currentValue.length >= maxSelectedCount
          ) {
            triggerEventValues(
              this,
              'selectMax',
              [value, options.find((v) => v.value === value) as ISelectorItem],
              e
            );
            return;
          }
          currentValue = [...currentValue, value];
        }
        if (!this.isControlled()) {
          this.update(currentValue);
        }
        triggerEventValues(
          this,
          'change',
          [
            currentValue,
            options.filter((v) => currentValue.indexOf(v.value) > -1),
          ],
          e
        );
      } else {
        if (value === this.getValue()) {
          if (minSelectedCount === 1) {
            triggerEventValues(
              this,
              'selectMin',
              [value, options.find((v) => v.value === value)],
              e
            );
            return;
          }
          if (!this.isControlled()) {
            this.update(undefined);
          }
          triggerEventValues(this, 'change', [undefined, undefined], e);
        } else {
          if (!this.isControlled()) {
            this.update(value);
          }
          triggerEventValues(
            this,
            'change',
            [value, options.find((v) => v.value === value)],
            e
          );
        }
      }
    },
  },
  null,
  [mixinValue()]
);

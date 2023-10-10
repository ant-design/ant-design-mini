import * as mixinValue from '../mixins/mixin-value';
import fmtEvent from '../_util/fmtEvent';
import { SwitchDefaultProps } from './props';

Component({
  props: SwitchDefaultProps,
  mixins: [
    mixinValue.mixinValue({
      valueKey: 'checked',
      defaultValueKey: 'defaultChecked',
    }),
  ],

  methods: {
    onChange(e) {
      const value = !this.getValue();
      if (!this.isControlled()) {
        this.update(value);
      }

      if (this.props.onChange) {
        this.props.onChange(value, fmtEvent(this.props, e));
      }

    },
  },
});
